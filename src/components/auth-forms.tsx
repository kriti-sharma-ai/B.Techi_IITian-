"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import { actions } from "@/lib/store";
import { PROGRAM_SLUG, programs } from "@/lib/content";
import { supabase } from "@/lib/supabase/client";
import { Button, buttonClass } from "./ui";
import { useToast } from "./toast";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-red">
          {error}
        </p>
      )}
    </div>
  );
}

const input =
  "h-11 w-full rounded-xl border border-border bg-bg px-3.5 text-[15px] outline-none transition-colors focus:border-fg/40 aria-[invalid=true]:border-red";

function GoogleButton({ onClick }: { onClick: () => void }) {
  return (
    <Button variant="secondary" size="lg" className="w-full" onClick={onClick}>
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
        <path fill="#4285F4" d="M22.6 12.2c0-.8-.1-1.5-.2-2.2H12v4.3h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-1.9 3.3-4.8 3.3-8.1Z" />
        <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1-3.7 1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23Z" />
        <path fill="#FBBC05" d="M5.8 14.1a6.6 6.6 0 0 1 0-4.2V7.1H2.1a11 11 0 0 0 0 9.8l3.7-2.8Z" />
        <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.2-3.2A11 11 0 0 0 2.1 7.1l3.7 2.8C6.7 7.3 9.1 5.4 12 5.4Z" />
      </svg>
      Continue with Google
    </Button>
  );
}

function Divider() {
  return (
    <div className="my-6 flex items-center gap-3 text-xs text-muted">
      <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
    </div>
  );
}

// Only allow internal redirects.
const safeNext = (next: string | null) => (next?.startsWith("/") && !next.startsWith("//") ? next : "/dashboard");

function useGoogle(redirectPath: string) {
  const toast = useToast();
  return async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin + redirectPath },
    });
    if (error) toast(error.message);
  };
}

export function LoginForm() {
  const router = useRouter();
  const next = safeNext(useSearchParams().get("next"));
  const toast = useToast();
  const google = useGoogle(next);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const err: typeof errors = {};
    if (!EMAIL.test(email)) err.email = "Enter a valid email address.";
    if (password.length < 8) err.password = "Password must be at least 8 characters.";
    setErrors(err);
    if (Object.keys(err).length) return;
    setBusy(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    setBusy(false);
    if (error) return setErrors({ password: error.message });
    const name = data.user.user_metadata?.name ?? email.split("@")[0];
    toast(`Welcome back, ${name.split(" ")[0]}`);
    router.push(next);
  };

  // Preview-only: the CMS gate is UI-side, real admin rights come from profiles.role.
  const demoAdmin = () => {
    actions.signIn({ name: "BTechi Admin", email: "admin@btechi.in", role: "admin", program: PROGRAM_SLUG, level: "foundation" });
    router.push("/admin");
  };

  return (
    <>
      <GoogleButton onClick={google} />
      <Divider />
      <form onSubmit={submit} noValidate className="space-y-4">
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={input}
          />
        </Field>
        <Field id="password" label="Password" error={errors.password}>
          <div className="relative">
            <input
              id="password"
              type={show ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "password-error" : undefined}
              className={input + " pr-11"}
            />
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              className="absolute top-1/2 right-2 grid size-8 -translate-y-1/2 place-items-center rounded-lg text-muted hover:text-fg"
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
        </Field>
        <button type="submit" disabled={busy} className={buttonClass("dark", "lg", "w-full disabled:opacity-60")}>
          {busy ? "Logging in…" : "Log in"}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-muted">
        New to BTechi?{" "}
        <Link href="/signup" className="font-semibold text-fg hover:underline">
          Create an account
        </Link>
      </p>
      <p className="mt-3 text-center text-xs text-muted">
        Previewing the CMS?{" "}
        <button type="button" onClick={demoAdmin} className="font-semibold text-fg underline">
          Sign in as demo admin
        </button>
      </p>
    </>
  );
}

export function SignupForm() {
  const router = useRouter();
  const toast = useToast();
  const [form, setForm] = useState({ name: "", email: "", password: "", university: "IIT Madras", program: PROGRAM_SLUG, level: "foundation" });
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const program = programs.find((p) => p.slug === form.program);
  const google = useGoogle("/dashboard");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const err: typeof errors = {};
    if (form.name.trim().length < 2) err.name = "Enter your name.";
    if (!EMAIL.test(form.email)) err.email = "Enter a valid email address.";
    if (form.password.length < 8) err.password = "Use at least 8 characters.";
    setErrors(err);
    if (Object.keys(err).length) return;
    setBusy(true);
    // The on_auth_user_created trigger copies this metadata into profiles.
    const { data, error } = await supabase.auth.signUp({
      email: form.email.trim(),
      password: form.password,
      options: {
        data: { name: form.name.trim(), university: form.university.trim(), program: form.program, level: form.level },
        emailRedirectTo: window.location.origin + "/dashboard",
      },
    });
    setBusy(false);
    if (error) return setErrors({ email: error.message });
    // No session means "Confirm email" is on in Supabase.
    if (!data.session) return toast("Check your inbox to confirm your email, then log in.");
    toast("Account created. Welcome to BTechi!");
    router.push("/dashboard");
  };

  return (
    <>
      <GoogleButton onClick={google} />
      <Divider />
      <form onSubmit={submit} noValidate className="space-y-4">
        <Field id="name" label="Full name" error={errors.name}>
          <input id="name" autoComplete="name" value={form.name} onChange={set("name")} aria-invalid={!!errors.name} className={input} />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input id="email" type="email" autoComplete="email" value={form.email} onChange={set("email")} aria-invalid={!!errors.email} className={input} />
        </Field>
        <Field id="password" label="Password" error={errors.password}>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            value={form.password}
            onChange={set("password")}
            aria-invalid={!!errors.password}
            className={input}
          />
        </Field>
        <Field id="university" label="University">
          <input id="university" value={form.university} onChange={set("university")} className={input} />
        </Field>
        <div className="grid grid-cols-[1fr_140px] gap-3">
          <Field id="program" label="Program">
            <select id="program" value={form.program} onChange={set("program")} className={input}>
              {programs.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name}
                </option>
              ))}
            </select>
          </Field>
          <Field id="level" label="Level">
            <select id="level" value={form.level} onChange={set("level")} className={input}>
              {(program?.levels ?? []).map((l) => (
                <option key={l.slug} value={l.slug}>
                  {l.short}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <button type="submit" disabled={busy} className={buttonClass("primary", "lg", "w-full disabled:opacity-60")}>
          {busy ? "Creating account…" : "Create account"}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-muted">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-fg hover:underline">
          Log in
        </Link>
      </p>
    </>
  );
}
