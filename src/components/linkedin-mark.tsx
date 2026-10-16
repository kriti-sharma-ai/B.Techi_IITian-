/** LinkedIn mark (lucide has no brand icons). */
export function LinkedinMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="3.5" fill="#0A66C2" />
      <path d="M6.5 9.75h2.6V17.5H6.5zM7.8 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM10.9 9.75h2.5v1.06c.35-.66 1.2-1.3 2.47-1.3 2.64 0 3.13 1.74 3.13 4V17.5h-2.6v-3.5c0-.84-.02-1.92-1.17-1.92-1.17 0-1.35.91-1.35 1.86v3.56h-2.6z" fill="#fff" />
    </svg>
  );
}
