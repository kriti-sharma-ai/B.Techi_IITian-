import type { Metadata } from "next";
import { SignupForm } from "@/components/auth-forms";
import { LogoMark } from "@/components/logo";

export const metadata: Metadata = {
  title: "Create your account",
  description: "Join BTechi free: save resources, track progress and practise with explanations.",
};

export default function SignupPage() {
  return (
    <div className="container-page grid min-h-[calc(100dvh-4rem)] place-items-center py-12">
      <div className="w-full max-w-sm">
        <LogoMark className="mx-auto size-11" />
        <h1 className="mt-5 text-center text-2xl font-extrabold tracking-tight">Create your account</h1>
        <p className="mt-1 mb-8 text-center text-sm text-muted">Free forever for students.</p>
        <SignupForm />
      </div>
    </div>
  );
}
