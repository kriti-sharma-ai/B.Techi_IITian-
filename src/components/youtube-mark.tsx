/** YouTube mark (lucide has no brand icons). */
export function YoutubeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="1.5" y="4.5" width="21" height="15" rx="4.5" fill="#FF0000" />
      <path d="M10 8.75v6.5L15.5 12z" fill="#fff" />
    </svg>
  );
}
