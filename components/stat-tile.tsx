import type { StatTileData } from "@/lib/types";
import { DeltaChip } from "./delta-chip";

export function StatTile({ label, value, delta, trend, caption }: StatTileData) {
  return (
    <div className="rounded-lg border border-border bg-surface p-5">
      <p className="text-sm text-ink-secondary">{label}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-semibold text-ink-primary">
          {value}
        </span>
        <DeltaChip delta={delta} trend={trend} />
      </div>
      <p className="mt-1 text-xs text-ink-muted">{caption}</p>
    </div>
  );
}
