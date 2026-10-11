import type { Metadata } from "next";
import { SignupForm } from "@/components/auth-forms";
import { AuthShell, Underlined } from "@/components/auth-shell";

export const metadata: Metadata = {
  title: "Create your account",
  description: "Join BTechi free: save resources, track progress and practise with explanations.",
};

export default function SignupPage() {
  return (
    <AuthShell
      headline={
        <>
          Pick up right where
          <br />
          you <Underlined>left off.</Underlined>
        </>
      }
    >
      <SignupForm />
    </AuthShell>
  );
}
