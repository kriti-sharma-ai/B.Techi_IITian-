import type { Metadata } from "next";
import { LoginForm } from "@/components/auth-forms";
import { AuthShell, Underlined } from "@/components/auth-shell";

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to BTechi to track your progress, saved resources and practice history.",
  robots: { index: false },
};

export default function LoginPage() {
  return (
    <AuthShell
      headline={
        <>
          Good to see
          <br />
          you <Underlined>again.</Underlined>
        </>
      }
    >
      <LoginForm />
    </AuthShell>
  );
}
