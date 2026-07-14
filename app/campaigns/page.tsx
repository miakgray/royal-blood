import { CampaignTable } from "@/components/campaign-table";
import { SectionCard } from "@/components/section-card";
import { Topbar } from "@/components/topbar";
import { campaigns } from "@/lib/mock-data";

export default function CampaignsPage() {
  return (
    <>
      <Topbar title="Campaigns" subtitle="All campaigns across platforms" />
      <div className="px-8 py-6">
        <SectionCard title="All campaigns">
          <CampaignTable campaigns={campaigns} />
        </SectionCard>
      </div>
    </>
  );
}
