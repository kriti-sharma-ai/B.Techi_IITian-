import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "@/components/auth-forms";
import { LogoMark } from "@/components/logo";

export const metadata: Metadata = { title: "Log in", robots: { index: false } };

export default function LoginPage() {
  return (
    <div className="container-page grid min-h-[calc(100dvh-4rem)] place-items-center py-12">
      <div className="w-full max-w-sm">
        <LogoMark className="mx-auto size-11" />
        <h1 className="mt-5 text-center text-2xl font-extrabold tracking-tight">Welcome back</h1>
        <p className="mt-1 mb-8 text-center text-sm text-muted">Log in to track progress and save resources.</p>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
