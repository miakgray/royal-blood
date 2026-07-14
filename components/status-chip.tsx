import type { CampaignStatus } from "@/lib/types";

const STATUS_STYLES: Record<
  CampaignStatus,
  { color: string; label: string }
> = {
  live: { color: "var(--status-good)", label: "Live" },
  scheduled: { color: "var(--status-warning)", label: "Scheduled" },
  ended: { color: "var(--text-muted)", label: "Ended" },
};

export function StatusChip({ status }: { status: CampaignStatus }) {
  const { color, label } = STATUS_STYLES[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-xs font-medium text-ink-secondary"
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  );
}
