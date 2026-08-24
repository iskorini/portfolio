import type { ReactNode } from "react";

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/[.08] bg-black/[.03] px-3 py-1 text-sm text-muted dark:border-white/[.1] dark:bg-white/[.05]">
      {children}
    </span>
  );
}
