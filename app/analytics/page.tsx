import { SectionCard } from "@/components/section-card";
import { Topbar } from "@/components/topbar";

export default function AnalyticsPage() {
  return (
    <>
      <Topbar title="Analytics" subtitle="Deeper trend and campaign analysis" />
      <div className="px-8 py-6">
        <SectionCard title="Coming soon">
          <p className="text-sm text-ink-secondary">
            Trend charts and cross-campaign comparisons will land here once
            platform data sources are connected.
          </p>
        </SectionCard>
      </div>
    </>
  );
}
