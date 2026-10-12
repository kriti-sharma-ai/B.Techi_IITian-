"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, Eye, EyeOff, LoaderCircle, MailCheck } from "lucide-react";
import { isAuthRetryableFetchError, isAuthSessionMissingError, type AuthError } from "@supabase/supabase-js";
import { PROGRAM_SLUG, programs } from "@/lib/content";
import { supabase } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { Button, ButtonLink, buttonClass } from "./ui";
import { useToast } from "./toast";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Errors<K extends string> = Partial<Record<K | "form", string>>;

// Only allow internal redirects ("//host" and "/\host" both leave the site).
const safeNext = (next: string | null) => (next && /^\/(?![/\\])/.test(next) ? next : "/dashboard");

// Read when needed rather than with useSearchParams, so the login form needs no Suspense
// boundary and is part of the server HTML.
const nextPath = () => safeNext(new URLSearchParams(window.location.search).get("next"));

/** Moves focus to the first field with an error. Field ids match the error keys. */
function focusFirst(errors: Record<string, string | undefined>) {
  const id = Object.keys(errors).find((k) => k !== "form" && errors[k]);
  if (id) document.getElementById(id)?.focus();
}

// Supabase's messages are written for developers; these are for students.
function authMessage(error: AuthError) {
  if (isAuthRetryableFetchError(error)) return "Couldn't reach BTechi. Check your connection and try again.";
  switch (error.code) {
    case "invalid_credentials":
      return "Incorrect email or password.";
    case "user_already_exists":
    case "email_exists":
      return "This email already has an account.";
    case "same_password":
      return "That's your current password. Choose a new one.";
    case "over_request_rate_limit":
    case "over_email_send_rate_limit":
      return "Too many attempts. Wait a minute, then try again.";
    default:
      return error.message;
  }
}

/* ───────────── Building blocks ───────────── */

function Field({
  id,
  label,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: ReactNode;
  children: ReactNode;
}) {
  // Errors and hints share the label row, so showing one never makes the form taller.
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3 tiny:mb-1">
        <label htmlFor={id} className="shrink-0 text-sm font-medium">
          {label}
        </label>
        {error ? (
          <p id={`${id}-error`} role="alert" className="text-right text-xs text-red">
            {error}
          </p>
        ) : (
          hint
        )}
      </div>
      {children}
    </div>
  );
}

const input =
  "h-11 short:h-10 tiny:h-9 w-full rounded-xl border border-border bg-bg px-3.5 text-[15px] outline-none transition-[border-color,box-shadow] placeholder:text-muted/60 focus:border-fg/40 focus:ring-4 focus:ring-fg/5 aria-[invalid=true]:border-red aria-[invalid=true]:focus:ring-red/10";

function PasswordInput({
  id,
  autoComplete,
  value,
  onChange,
  invalid,
  describedBy,
}: {
  id: string;
  autoComplete: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  invalid: boolean;
  describedBy?: string;
}) {
  const [show, setShow] = useState(false);
  const [caps, setCaps] = useState(false);
  const checkCaps = (e: React.KeyboardEvent) => setCaps(e.getModifierState("CapsLock"));
  return (
    <div className="relative">
      <input
        id={id}
        type={show ? "text" : "password"}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        onKeyDown={checkCaps}
        onKeyUp={checkCaps}
        onBlur={() => setCaps(false)}
        aria-invalid={invalid}
        aria-describedby={describedBy}
        className={cn(input, caps ? "pr-30" : "pr-11")}
      />
      {caps && (
        <span
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-11 -translate-y-1/2 rounded-md bg-amber/10 px-1.5 py-0.5 text-[11px] font-semibold text-amber"
        >
          Caps Lock
        </span>
      )}
      <span role="status" className="sr-only">
        {caps ? "Caps Lock is on" : ""}
      </span>
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        className="absolute top-1/2 right-2 grid size-8 -translate-y-1/2 place-items-center rounded-lg text-muted hover:text-fg"
        aria-label={show ? "Hide password" : "Show password"}
      >
        {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
      </button>
    </div>
  );
}

function GoogleButton({ onClick, busy }: { onClick: () => void; busy: boolean }) {
  return (
    <Button variant="secondary" size="lg" className="w-full short:h-11 tiny:h-10" onClick={onClick} disabled={busy}>
      {busy ? (
        <LoaderCircle className="size-5 animate-spin" aria-hidden />
      ) : (
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <path fill="#4285F4" d="M22.6 12.2c0-.8-.1-1.5-.2-2.2H12v4.3h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-1.9 3.3-4.8 3.3-8.1Z" />
          <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1-3.7 1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23Z" />
          <path fill="#FBBC05" d="M5.8 14.1a6.6 6.6 0 0 1 0-4.2V7.1H2.1a11 11 0 0 0 0 9.8l3.7-2.8Z" />
          <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.2-3.2A11 11 0 0 0 2.1 7.1l3.7 2.8C6.7 7.3 9.1 5.4 12 5.4Z" />
        </svg>
      )}
      Continue with Google
    </Button>
  );
}

/** Google sign-in, plus whether the browser is on its way to Google (for the button's spinner). */
function useGoogle() {
  const toast = useToast();
  const [redirecting, setRedirecting] = useState(false);
  // Coming back with the Back button can restore this page from the bfcache, still "redirecting".
  useEffect(() => {
    const reset = (e: PageTransitionEvent) => e.persisted && setRedirecting(false);
    window.addEventListener("pageshow", reset);
    return () => window.removeEventListener("pageshow", reset);
  }, []);
  const start = async (redirectPath: string) => {
    setRedirecting(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin + redirectPath },
    });
    if (error) {
      setRedirecting(false);
      toast(authMessage(error));
    }
  };
  return { start, redirecting };
}

function Divider({ label = "or", className = "my-6" }: { label?: string; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 text-xs text-muted", className)}>
      <span className="h-px flex-1 bg-border" /> {label} <span className="h-px flex-1 bg-border" />
    </div>
  );
}

function AuthHeader({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="mb-6 text-center short:mb-5 tiny:mb-4 lg:text-left">
      <h1 className="text-2xl font-extrabold tracking-tight md:text-[1.75rem]">{title}</h1>
      {children && <p className="mt-1 text-sm text-muted">{children}</p>}
    </div>
  );
}

function FormAlert({ tone = "error", children }: { tone?: "error" | "info"; children: ReactNode }) {
  return (
    <div
      role="alert"
      className={cn(
        "rounded-xl border px-3.5 py-2.5 text-sm",
        tone === "error" ? "border-red/30 bg-red/5 text-red" : "border-amber/30 bg-amber/5 text-fg",
      )}
    >
      {children}
    </div>
  );
}

function SubmitButton({ busy, busyLabel, children }: { busy: boolean; busyLabel: string; children: ReactNode }) {
  return (
    <button type="submit" disabled={busy} className={buttonClass("primary", "lg", "group w-full short:h-11 tiny:h-10 disabled:opacity-60")}>
      {busy ? (
        <>
          <LoaderCircle className="size-4 animate-spin" aria-hidden /> {busyLabel}
        </>
      ) : (
        <>
          {children} <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </>
      )}
    </button>
  );
}

// Supabase allows one auth email per address per minute by default, so match it.
const RESEND_AFTER = 60;

/** "We emailed you a link" screen, for sign-up confirmation and password resets. */
function CheckInbox({
  email,
  link,
  then,
  resend,
  action,
  onChangeEmail,
}: {
  email: string;
  link: string;
  then: string;
  resend: () => Promise<{ error: AuthError | null }>;
  action: ReactNode;
  onChangeEmail?: () => void;
}) {
  const toast = useToast();
  const [sending, setSending] = useState(false);
  const [wait, setWait] = useState(RESEND_AFTER);
  useEffect(() => {
    if (wait <= 0) return;
    const t = setTimeout(() => setWait((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [wait]);

  const send = async () => {
    setSending(true);
    const { error } = await resend();
    setSending(false);
    toast(error ? authMessage(error) : "Sent again. It can take a minute to arrive.");
    if (!error) setWait(RESEND_AFTER);
  };

  return (
    <div className="animate-fade-up text-center">
      <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-green/10 text-green">
        <MailCheck className="size-7" aria-hidden />
      </span>
      <h1 className="mt-5 text-2xl font-extrabold tracking-tight">Check your inbox</h1>
      <p className="mt-2 text-sm text-muted">
        We sent {link} to <span className="font-semibold break-all text-fg">{email}</span>. {then}
      </p>
      <div className="mt-8">{action}</div>
      <p className="mt-5 text-sm text-muted">
        Didn&apos;t get it? Check spam, or{" "}
        {wait > 0 ? (
          <span className="tabular-nums">send it again in {wait}s</span>
        ) : (
          <button type="button" onClick={send} disabled={sending} className="font-semibold text-fg hover:underline disabled:opacity-60">
            send it again
          </button>
        )}
        .
      </p>
      {onChangeEmail && (
        <button type="button" onClick={onChangeEmail} className="mt-3 text-sm font-medium text-muted hover:text-fg">
          Use a different email
        </button>
      )}
    </div>
  );
}

/* ───────────── Password strength ───────────── */

const strengths = [
  { label: "Weak", bar: "bg-red", text: "text-red" },
  { label: "Fair", bar: "bg-amber", text: "text-amber" },
  { label: "Good", bar: "bg-green", text: "text-green" },
  { label: "Strong", bar: "bg-green", text: "text-green" },
];

// 0 below the 8-character minimum, then 1–4: one point each for 12+ characters, mixed case, digits and symbols.
function passwordScore(p: string) {
  if (p.length < 8) return 0;
  const extras = [p.length >= 12, /[a-z]/.test(p) && /[A-Z]/.test(p), /\d/.test(p), /[^A-Za-z0-9]/.test(p)].filter(Boolean).length;
  return Math.min(4, 1 + extras);
}

function StrengthHint({ id, password, score }: { id: string; password: string; score: number }) {
  const s = strengths[score - 1];
  const left = 8 - password.length;
  return (
    <p id={id} className="text-right text-xs text-muted">
      {s ? (
        <>
          <span className={cn("font-semibold", s.text)}>{s.label}</span>
          {score < 3 && " · add capitals, numbers or symbols"}
        </>
      ) : password ? (
        `${left} more character${left === 1 ? "" : "s"}`
      ) : (
        "8+ characters"
      )}
    </p>
  );
}

function StrengthBars({ score }: { score: number }) {
  return (
    <div className="mt-2 flex gap-1" aria-hidden>
      {[1, 2, 3, 4].map((i) => (
        <span key={i} className={cn("h-1 flex-1 rounded-full transition-colors duration-300", i <= score ? strengths[score - 1].bar : "bg-border")} />
      ))}
    </div>
  );
}

/* ───────────── Log in ───────────── */

const confirmationLink = (email: string) =>
  supabase.auth.resend({ type: "signup", email, options: { emailRedirectTo: window.location.origin + "/dashboard" } });

export function LoginForm() {
  const router = useRouter();
  const toast = useToast();
  const google = useGoogle();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<Errors<"email" | "password">>({});
  // Supabase refused the login because the email isn't confirmed yet.
  const [unconfirmed, setUnconfirmed] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);

  // Already signed in (a bookmark, or Back after logging in): skip the form.
  useEffect(() => {
    void supabase.auth.getSession().then(async ({ data }) => {
      if (data.session) {
        const explicit = new URLSearchParams(window.location.search).get("next");
        if (explicit) {
          router.replace(safeNext(explicit));
        } else {
          const { data: profile } = await supabase.from("profiles").select("role").eq("id", data.session.user.id).maybeSingle();
          const isStaff = profile?.role && profile.role !== "student";
          router.replace(isStaff ? "/admin" : "/dashboard");
        }
      }
    });
  }, [router]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const address = email.trim();
    const err: typeof errors = {};
    if (!EMAIL.test(address)) err.email = "Enter a valid email address.";
    if (!password) err.password = "Enter your password.";
    setErrors(err);
    setUnconfirmed(false);
    if (Object.keys(err).length) return focusFirst(err);
    setBusy(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email: address, password });
    if (error) {
      setBusy(false);
      if (error.code === "email_not_confirmed") return setUnconfirmed(true);
      setErrors({ form: authMessage(error) });
      // Select the password so retyping replaces it.
      if (error.code === "invalid_credentials") (document.getElementById("password") as HTMLInputElement | null)?.select();
      return;
    }
    // Stays busy while the next page loads, so the form can't be sent twice.
    const name: string = data.user.user_metadata?.name ?? address.split("@")[0];
    toast(`Welcome back, ${name.split(" ")[0]}`);
    
    const explicit = new URLSearchParams(window.location.search).get("next");
    if (explicit) {
      router.push(safeNext(explicit));
    } else {
      const { data: profile } = await supabase.from("profiles").select("role").eq("id", data.user.id).maybeSingle();
      const isStaff = profile?.role && profile.role !== "student";
      router.push(isStaff ? "/admin" : "/dashboard");
    }
  };

  const resendConfirmation = async () => {
    const address = email.trim();
    setBusy(true);
    const { error } = await confirmationLink(address);
    setBusy(false);
    if (error) return setErrors({ form: authMessage(error) });
    setUnconfirmed(false);
    setSentTo(address);
  };

  if (sentTo)
    return (
      <CheckInbox
        email={sentTo}
        link="a new confirmation link"
        then="Open it to activate your account, then log in."
        resend={() => confirmationLink(sentTo)}
        action={
          <Button variant="dark" size="lg" className="w-full" onClick={() => setSentTo(null)}>
            <ArrowLeft className="size-4" aria-hidden /> Back to log in
          </Button>
        }
      />
    );

  return (
    <>
      <AuthHeader title="Welcome back">
        New to BTechi?{" "}
        <Link href="/signup" className="font-semibold text-fg hover:underline">
          Create a free account
        </Link>
      </AuthHeader>

      <GoogleButton onClick={() => google.start(nextPath())} busy={google.redirecting} />
      <Divider label="or log in with email" className="my-5 short:my-4 tiny:my-3" />
      <form onSubmit={submit} noValidate className="space-y-4 short:space-y-3 tiny:space-y-2.5">
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            type="email"
            autoComplete="username"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={input}
          />
        </Field>
        <Field
          id="password"
          label="Password"
          error={errors.password}
          hint={
            <Link href="/reset-password" className="text-xs font-medium text-muted hover:text-fg hover:underline">
              Forgot password?
            </Link>
          }
        >
          <PasswordInput
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            invalid={!!errors.password}
            describedBy={errors.password ? "password-error" : undefined}
          />
        </Field>

        {unconfirmed && (
          <FormAlert tone="info">
            Confirm your email to log in. We sent a link to <span className="font-semibold break-all">{email.trim()}</span> when you
            signed up.{" "}
            <button type="button" onClick={resendConfirmation} disabled={busy} className="font-semibold underline underline-offset-2 disabled:opacity-60">
              Send a new link
            </button>
          </FormAlert>
        )}
        {errors.form && <FormAlert>{errors.form}</FormAlert>}

        <SubmitButton busy={busy} busyLabel="Logging in…">
          Log in
        </SubmitButton>
      </form>
    </>
  );
}

/* ───────────── Sign up ───────────── */

const levelDot: Record<string, string> = { foundation: "bg-brand", diploma: "bg-blue", degree: "bg-purple" };

type SignupErrors = Errors<"name" | "email" | "password">;

// Put Supabase errors on the field they're about; anything else shows above the button.
const errorField = (code?: string): keyof SignupErrors =>
  code?.includes("password") ? "password" : code?.includes("email") || code === "user_already_exists" ? "email" : "form";

export function SignupForm() {
  const router = useRouter();
  const toast = useToast();
  const google = useGoogle();
  const [form, setForm] = useState({ name: "", email: "", password: "", program: PROGRAM_SLUG, level: "foundation" });
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<SignupErrors>({});
  // Set when Supabase wants the email confirmed before the first login.
  const [sentTo, setSentTo] = useState<string | null>(null);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const program = programs.find((p) => p.slug === form.program);
  const score = passwordScore(form.password);
  const redirectTo = () => window.location.origin + "/dashboard";

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const email = form.email.trim();
    const err: SignupErrors = {};
    if (form.name.trim().length < 2) err.name = "Enter your name.";
    if (!EMAIL.test(email)) err.email = "Enter a valid email address.";
    if (form.password.length < 8) err.password = "Use at least 8 characters.";
    setErrors(err);
    if (Object.keys(err).length) return focusFirst(err);
    setBusy(true);
    // The on_auth_user_created trigger copies this metadata into profiles.
    const { data, error } = await supabase.auth.signUp({
      email,
      password: form.password,
      options: {
        data: { name: form.name.trim(), university: program?.university, program: form.program, level: form.level },
        emailRedirectTo: redirectTo(),
      },
    });
    if (error) {
      setBusy(false);
      const field = errorField(error.code);
      setErrors({ [field]: authMessage(error) });
      return focusFirst({ [field]: field });
    }
    // No session means "Confirm email" is on in Supabase.
    if (!data.session) {
      setBusy(false);
      return setSentTo(email);
    }
    toast("Account created. Welcome to BTechi!");
    router.push("/dashboard");
  };

  if (sentTo)
    return (
      <CheckInbox
        email={sentTo}
        link="a confirmation link"
        then="Open it to activate your account."
        resend={() => supabase.auth.resend({ type: "signup", email: sentTo, options: { emailRedirectTo: redirectTo() } })}
        action={
          <ButtonLink href="/login" variant="dark" size="lg" className="w-full">
            Go to log in <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        }
        onChangeEmail={() => setSentTo(null)}
      />
    );

  return (
    <>
      <AuthHeader title="Create your free account">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-fg hover:underline">
          Log in
        </Link>
      </AuthHeader>

      <GoogleButton onClick={() => google.start("/dashboard")} busy={google.redirecting} />
      <Divider label="or sign up with email" className="my-5 short:my-4 tiny:my-3" />
      <form onSubmit={submit} noValidate className="space-y-4 short:space-y-3 tiny:space-y-2.5">
        <Field id="name" label="Full name" error={errors.name}>
          <input
            id="name"
            autoComplete="name"
            placeholder="Your name"
            value={form.name}
            onChange={set("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={input}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={set("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={input}
          />
        </Field>
        <Field
          id="password"
          label="Password"
          error={errors.password}
          hint={<StrengthHint id="password-strength" password={form.password} score={score} />}
        >
          <PasswordInput
            id="password"
            autoComplete="new-password"
            value={form.password}
            onChange={set("password")}
            invalid={!!errors.password}
            describedBy={errors.password ? "password-error" : "password-strength"}
          />
          <StrengthBars score={score} />
        </Field>

        {programs.length > 1 && (
          <Field id="program" label="Program">
            <select
              id="program"
              value={form.program}
              onChange={(e) => {
                const next = programs.find((p) => p.slug === e.target.value);
                setForm((f) => ({ ...f, program: e.target.value, level: next?.levels[0]?.slug ?? f.level }));
              }}
              className={input}
            >
              {programs.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name}
                </option>
              ))}
            </select>
          </Field>
        )}

        <div role="radiogroup" aria-labelledby="level-label" aria-describedby="level-hint">
          <div className="mb-1.5 flex items-baseline justify-between gap-3 tiny:mb-1">
            <span id="level-label" className="text-sm font-medium">
              Your level
            </span>
            <span id="level-hint" className="text-right text-xs text-muted">
              Sets your dashboard courses
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {(program?.levels ?? []).map((l) => (
              <label
                key={l.slug}
                className="flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl border border-border bg-bg text-sm font-medium text-muted transition-colors select-none hover:border-fg/30 hover:text-fg has-checked:border-fg has-checked:bg-surface-2 has-checked:font-semibold has-checked:text-fg has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-fg short:h-10 tiny:h-9"
              >
                <input type="radio" name="level" value={l.slug} checked={form.level === l.slug} onChange={set("level")} className="sr-only" />
                <span className={cn("size-2 shrink-0 rounded-full", levelDot[l.slug] ?? "bg-muted")} aria-hidden />
                {l.short}
              </label>
            ))}
          </div>
        </div>

        {errors.form && <FormAlert>{errors.form}</FormAlert>}

        <SubmitButton busy={busy} busyLabel="Creating account…">
          Create free account
        </SubmitButton>
        <p className="text-center text-xs text-muted">
          By signing up you agree to our{" "}
          <Link href="/terms" className="underline underline-offset-2 hover:text-fg">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-fg">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </>
  );
}

/* ───────────── Reset password ───────────── */

const resetLink = (email: string) =>
  supabase.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin + "/reset-password" });

/**
 * Both halves of a password reset on one route: ask for the email and send the link, then, when
 * the link brings the student back here signed in, let them choose a new password.
 */
export function ResetPasswordForm() {
  const router = useRouter();
  const toast = useToast();
  const [stage, setStage] = useState<"checking" | "request" | "sent" | "set">("checking");
  // The link that brought them here was rejected: expired, or already used.
  const [expired, setExpired] = useState(false);
  const [account, setAccount] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<Errors<"email" | "password">>({});
  const score = passwordScore(password);

  // The emailed link lands here with a recovery session (or an error) in the URL hash, which the
  // Supabase client reads while it initialises; getSession waits for that. Errors stay in the hash.
  useEffect(() => {
    const url = new URL(window.location.href);
    const failed = new URLSearchParams(url.hash.slice(1)).has("error") || url.searchParams.has("error");
    void supabase.auth.getSession().then(({ data }) => {
      if (failed) {
        setExpired(true);
        // So a refresh doesn't show the error again.
        window.history.replaceState(window.history.state, "", url.pathname);
      }
      if (data.session && !failed) {
        setAccount(data.session.user.email ?? "");
        setStage("set");
      } else setStage("request");
    });
  }, []);

  const request = async (e: FormEvent) => {
    e.preventDefault();
    const address = email.trim();
    if (!EMAIL.test(address)) {
      setErrors({ email: "Enter a valid email address." });
      return focusFirst({ email: "invalid" });
    }
    setErrors({});
    setBusy(true);
    // Succeeds whether or not the email has an account, so this can't be used to probe for one.
    const { error } = await resetLink(address);
    setBusy(false);
    if (error) return setErrors({ form: authMessage(error) });
    setExpired(false);
    setStage("sent");
  };

  const save = async (e: FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      setErrors({ password: "Use at least 8 characters." });
      return focusFirst({ password: "short" });
    }
    setErrors({});
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setBusy(false);
      // The recovery session ran out while they were on the page.
      if (isAuthSessionMissingError(error)) {
        setExpired(true);
        return setStage("request");
      }
      return setErrors({ form: authMessage(error) });
    }
    toast("Password updated. You're logged in.");
    router.replace("/dashboard");
  };

  if (stage === "checking")
    return (
      <div role="status" className="grid place-items-center py-24 text-muted">
        <LoaderCircle className="size-6 animate-spin" aria-hidden />
        <span className="sr-only">Checking your reset link…</span>
      </div>
    );

  if (stage === "sent")
    return (
      <CheckInbox
        email={email.trim()}
        link="a password reset link"
        then="Open it to choose a new password."
        resend={() => resetLink(email.trim())}
        action={
          <ButtonLink href="/login" variant="dark" size="lg" className="w-full">
            <ArrowLeft className="size-4" aria-hidden /> Back to log in
          </ButtonLink>
        }
        onChangeEmail={() => setStage("request")}
      />
    );

  if (stage === "set")
    return (
      <>
        <AuthHeader title="Choose a new password">
          {account && (
            <>
              For <span className="font-semibold break-all text-fg">{account}</span>
            </>
          )}
        </AuthHeader>
        <form onSubmit={save} noValidate className="space-y-4 short:space-y-3">
          {/* Tells password managers which account the new password belongs to. */}
          <input type="email" autoComplete="username" value={account} readOnly tabIndex={-1} aria-hidden className="sr-only" />
          <Field
            id="password"
            label="New password"
            error={errors.password}
            hint={<StrengthHint id="password-strength" password={password} score={score} />}
          >
            <PasswordInput
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              invalid={!!errors.password}
              describedBy={errors.password ? "password-error" : "password-strength"}
            />
            <StrengthBars score={score} />
          </Field>
          {errors.form && <FormAlert>{errors.form}</FormAlert>}
          <SubmitButton busy={busy} busyLabel="Updating password…">
            Update password
          </SubmitButton>
        </form>
      </>
    );

  return (
    <>
      <AuthHeader title="Reset your password">Enter the email you signed up with and we&apos;ll send you a link to choose a new one.</AuthHeader>
      <form onSubmit={request} noValidate className="space-y-4 short:space-y-3">
        {expired && <FormAlert tone="info">That reset link has expired or was already used. Request a new one below.</FormAlert>}
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={input}
          />
        </Field>
        {errors.form && <FormAlert>{errors.form}</FormAlert>}
        <SubmitButton busy={busy} busyLabel="Sending link…">
          Send reset link
        </SubmitButton>
      </form>
      <p className="mt-6 text-center">
        <Link href="/login" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-fg">
          <ArrowLeft className="size-4" aria-hidden /> Back to log in
        </Link>
      </p>
    </>
  );
}
