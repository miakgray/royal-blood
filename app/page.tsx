import { ActivityFeed } from "@/components/activity-feed";
import { CampaignTable } from "@/components/campaign-table";
import { PlatformCard } from "@/components/platform-card";
import { SectionCard } from "@/components/section-card";
import { StatTile } from "@/components/stat-tile";
import { Topbar } from "@/components/topbar";
import {
  campaigns,
  overviewStats,
  platformStats,
  recentActivity,
} from "@/lib/mock-data";

export default function HomePage() {
  const liveCampaigns = campaigns.filter((c) => c.status !== "ended");

  return (
    <>
      <Topbar
        title="Home"
        subtitle="Campaign and social performance overview"
      />

      <div className="flex flex-col gap-6 px-8 py-6">
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {overviewStats.map((stat) => (
            <StatTile key={stat.label} {...stat} />
          ))}
        </section>

        <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionCard title="Active & upcoming campaigns">
              <CampaignTable campaigns={liveCampaigns} />
            </SectionCard>
          </div>
          <SectionCard title="Recent activity">
            <ActivityFeed items={recentActivity} />
          </SectionCard>
        </section>

        <section>
          <SectionCard title="Platform breakdown">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {platformStats.map((stat) => (
                <PlatformCard key={stat.platform} {...stat} />
              ))}
            </div>
          </SectionCard>
        </section>
      </div>
    </>
  );
}
