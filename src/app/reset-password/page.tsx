import type { Metadata } from "next";
import { ResetPasswordForm } from "@/components/auth-forms";
import { AuthShell, Underlined } from "@/components/auth-shell";

export const metadata: Metadata = { title: "Reset password", robots: { index: false } };

export default function ResetPasswordPage() {
  return (
    <AuthShell
      headline={
        <>
          Locked out? Happens
          <br />
          to <Underlined>everyone.</Underlined>
        </>
      }
    >
      <ResetPasswordForm />
    </AuthShell>
  );
}
