import { PlatformCard } from "@/components/platform-card";
import { SectionCard } from "@/components/section-card";
import { Topbar } from "@/components/topbar";
import { platformStats } from "@/lib/mock-data";

export default function SocialPage() {
  return (
    <>
      <Topbar title="Social" subtitle="Follower and engagement tracking by platform" />
      <div className="px-8 py-6">
        <SectionCard title="Platforms">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {platformStats.map((stat) => (
              <PlatformCard key={stat.platform} {...stat} />
            ))}
          </div>
        </SectionCard>
      </div>
    </>
  );
}
