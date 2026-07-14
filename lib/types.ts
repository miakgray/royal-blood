export type Platform =
  | "Instagram"
  | "TikTok"
  | "X"
  | "YouTube"
  | "Spotify"
  | "Facebook";

export type CampaignStatus = "live" | "scheduled" | "ended";

export type Trend = "up" | "down" | "flat";

export interface StatTileData {
  label: string;
  value: string;
  delta: string;
  trend: Trend;
  caption: string;
}

export interface PlatformStat {
  platform: Platform;
  handle: string;
  followers: string;
  delta: string;
  trend: Trend;
  color: string;
}

export interface Campaign {
  id: string;
  name: string;
  platforms: Platform[];
  status: CampaignStatus;
  reach: string;
  startDate: string;
  endDate: string;
}

export interface ActivityItem {
  id: string;
  platform: Platform;
  summary: string;
  timestamp: string;
}
