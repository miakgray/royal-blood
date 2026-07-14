import type { ActivityItem } from "@/lib/types";

export function ActivityFeed({ items }: { items: ActivityItem[] }) {
  return (
    <ul className="flex flex-col divide-y divide-border">
      {items.map((item) => (
        <li key={item.id} className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
              {item.platform}
            </p>
            <p className="mt-0.5 text-sm text-ink-primary">{item.summary}</p>
          </div>
          <span className="shrink-0 text-xs text-ink-muted">
            {item.timestamp}
          </span>
        </li>
      ))}
    </ul>
  );
}
