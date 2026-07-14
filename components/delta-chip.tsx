import type { Trend } from "@/lib/types";

const TREND_STYLES: Record<Trend, { color: string; arrow: string }> = {
  up: { color: "var(--status-good)", arrow: "▲" },
  down: { color: "var(--status-critical)", arrow: "▼" },
  flat: { color: "var(--text-muted)", arrow: "–" },
};

export function DeltaChip({ delta, trend }: { delta: string; trend: Trend }) {
  const { color, arrow } = TREND_STYLES[trend];
  return (
    <span
      className="inline-flex items-center gap-1 text-xs font-medium"
      style={{ color }}
    >
      <span aria-hidden="true">{arrow}</span>
      {delta}
    </span>
  );
}
