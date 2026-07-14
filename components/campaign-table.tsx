import type { Campaign } from "@/lib/types";
import { StatusChip } from "./status-chip";

export function CampaignTable({ campaigns }: { campaigns: Campaign[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-xs text-ink-muted">
            <th className="pb-2 font-medium">Campaign</th>
            <th className="pb-2 font-medium">Platforms</th>
            <th className="pb-2 font-medium">Status</th>
            <th className="pb-2 font-medium">Reach</th>
            <th className="pb-2 font-medium">Window</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((c) => (
            <tr key={c.id} className="border-t border-border">
              <td className="py-3 pr-4 font-medium text-ink-primary">
                {c.name}
              </td>
              <td className="py-3 pr-4 text-ink-secondary">
                {c.platforms.join(", ")}
              </td>
              <td className="py-3 pr-4">
                <StatusChip status={c.status} />
              </td>
              <td className="py-3 pr-4 text-ink-secondary">{c.reach}</td>
              <td className="py-3 pr-4 text-ink-muted">
                {c.startDate} – {c.endDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
