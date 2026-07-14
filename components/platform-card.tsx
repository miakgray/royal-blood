import type { PlatformStat } from "@/lib/types";
import { DeltaChip } from "./delta-chip";

export function PlatformCard({
  platform,
  handle,
  followers,
  delta,
  trend,
  color,
}: PlatformStat) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-surface p-4">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="h-2.5 w-2.5 shrink-0 rounded-full"
          style={{ backgroundColor: color }}
        />
        <div>
          <p className="text-sm font-medium text-ink-primary">{platform}</p>
          <p className="text-xs text-ink-muted">{handle}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold text-ink-primary">{followers}</p>
        <DeltaChip delta={delta} trend={trend} />
      </div>
    </div>
  );
}
