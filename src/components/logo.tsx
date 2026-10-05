import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={cn("size-8", className)}>
      <rect width="32" height="32" rx="8" fill="#FFD21C" />
      <path
        d="M10 7.5h7.2c3.6 0 5.8 1.8 5.8 4.6 0 1.9-1 3.2-2.6 3.8 2.1.5 3.4 2 3.4 4.2 0 3.2-2.4 5.4-6.3 5.4H10V7.5Zm4.2 3.4v4h2.4c1.4 0 2.2-.7 2.2-2s-.8-2-2.2-2h-2.4Zm0 7.1v4.6h2.9c1.6 0 2.5-.8 2.5-2.3s-.9-2.3-2.5-2.3h-2.9Z"
        fill="#0B0B0B"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 font-extrabold tracking-tight", className)} aria-label="BTechi home">
      <LogoMark />
      <span className="text-lg">BTechi</span>
    </Link>
  );
}
