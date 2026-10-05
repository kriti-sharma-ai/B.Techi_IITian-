import Link from "next/link";
import { cn, formatNumber } from "@/lib/utils";

export function StatCard({ label, value, hint, accent }: { label: string; value: number | string; hint?: string; accent?: string }) {
  return (
    <div className="card p-5">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-1 text-3xl font-extrabold tracking-tight tabular-nums">{typeof value === "number" ? formatNumber(value) : value}</p>
      {hint && <p className={cn("mt-1 text-xs", accent ?? "text-muted")}>{hint}</p>}
    </div>
  );
}

/** Ranked horizontal bars for "Most popular" lists. */
export function BarList({
  title,
  rows,
  empty = "No data yet.",
}: {
  title: string;
  rows: { label: string; value: number; href?: string }[];
  empty?: string;
}) {
  const max = Math.max(1, ...rows.map((r) => r.value));
  return (
    <section className="card p-5">
      <h2 className="mb-4 font-semibold">{title}</h2>
      {rows.length === 0 ? (
        <p className="text-sm text-muted">{empty}</p>
      ) : (
        <ol className="space-y-3">
          {rows.map((r, i) => {
            const label = (
              <span className="flex justify-between gap-3 text-sm">
                <span className="truncate">
                  <span className="mr-2 text-muted tabular-nums">{i + 1}.</span>
                  {r.label}
                </span>
                <span className="font-semibold tabular-nums">{formatNumber(r.value)}</span>
              </span>
            );
            return (
              <li key={r.label + i}>
                {r.href ? (
                  <Link href={r.href} className="hover:underline">
                    {label}
                  </Link>
                ) : (
                  label
                )}
                <div className="mt-1.5 h-1.5 rounded-full bg-surface-2">
                  <div className={cn("h-full rounded-full", i === 0 ? "bg-brand" : "bg-ink/60")} style={{ width: `${(r.value / max) * 100}%` }} />
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}

export function Table({ head, children, caption }: { head: string[]; children: React.ReactNode; caption?: string }) {
  return (
    <div className="card overflow-x-auto">
      <table className="w-full min-w-[640px] text-left text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead className="border-b border-border text-xs text-muted uppercase">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 font-semibold tracking-wide">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">{children}</tbody>
      </table>
    </div>
  );
}

export const Td = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <td className={cn("px-4 py-3 align-middle", className)}>{children}</td>
);
