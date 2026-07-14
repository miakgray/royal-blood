import type {
  ActivityItem,
  Campaign,
  PlatformStat,
  StatTileData,
} from "./types";

// Placeholder data — replace with live API/platform integrations.

export const overviewStats: StatTileData[] = [
  {
    label: "Total reach",
    value: "18.4M",
    delta: "+6.2%",
    trend: "up",
    caption: "vs. previous 30 days",
  },
  {
    label: "Total followers",
    value: "4.92M",
    delta: "+1.8%",
    trend: "up",
    caption: "across 6 platforms",
  },
  {
    label: "Engagement rate",
    value: "3.4%",
    delta: "-0.3%",
    trend: "down",
    caption: "vs. previous 30 days",
  },
  {
    label: "Active campaigns",
    value: "5",
    delta: "+2",
    trend: "up",
    caption: "2 launching this week",
  },
];

export const platformStats: PlatformStat[] = [
  {
    platform: "Instagram",
    handle: "@royalblooduk",
    followers: "1.62M",
    delta: "+2.1%",
    trend: "up",
    color: "#dd2a7b",
  },
  {
    platform: "TikTok",
    handle: "@royalblooduk",
    followers: "812K",
    delta: "+9.4%",
    trend: "up",
    color: "#25f4ee",
  },
  {
    platform: "X",
    handle: "@royalblooduk",
    followers: "534K",
    delta: "-0.6%",
    trend: "down",
    color: "#ffffff",
  },
  {
    platform: "YouTube",
    handle: "Royal Blood",
    followers: "441K",
    delta: "+0.9%",
    trend: "up",
    color: "#ff0000",
  },
  {
    platform: "Spotify",
    handle: "Royal Blood",
    followers: "1.31M",
    delta: "+3.5%",
    trend: "up",
    color: "#1db954",
  },
  {
    platform: "Facebook",
    handle: "Royal Blood",
    followers: "228K",
    delta: "-1.2%",
    trend: "down",
    color: "#1877f2",
  },
];

export const campaigns: Campaign[] = [
  {
    id: "cmp-01",
    name: "Album Announce — Teaser Wave",
    platforms: ["Instagram", "TikTok", "X"],
    status: "live",
    reach: "6.1M",
    startDate: "2026-07-01",
    endDate: "2026-07-21",
  },
  {
    id: "cmp-02",
    name: "Single Release — \"Front Row\"",
    platforms: ["Spotify", "YouTube", "Instagram"],
    status: "live",
    reach: "3.8M",
    startDate: "2026-07-10",
    endDate: "2026-08-01",
  },
  {
    id: "cmp-03",
    name: "Tour Announce — North America",
    platforms: ["Instagram", "Facebook", "X"],
    status: "scheduled",
    reach: "—",
    startDate: "2026-07-22",
    endDate: "2026-08-15",
  },
  {
    id: "cmp-04",
    name: "TikTok Sound Push",
    platforms: ["TikTok"],
    status: "scheduled",
    reach: "—",
    startDate: "2026-07-28",
    endDate: "2026-08-10",
  },
  {
    id: "cmp-05",
    name: "Festival Season Recap",
    platforms: ["Instagram", "YouTube"],
    status: "ended",
    reach: "5.2M",
    startDate: "2026-05-15",
    endDate: "2026-06-30",
  },
];

export const recentActivity: ActivityItem[] = [
  {
    id: "act-01",
    platform: "TikTok",
    summary: "\"Front Row\" sound crossed 40K creations",
    timestamp: "2h ago",
  },
  {
    id: "act-02",
    platform: "Instagram",
    summary: "Teaser reel hit 2.1M views, top post this week",
    timestamp: "5h ago",
  },
  {
    id: "act-03",
    platform: "X",
    summary: "Tour announce thread pinned and scheduled",
    timestamp: "1d ago",
  },
  {
    id: "act-04",
    platform: "Spotify",
    summary: "\"Front Row\" added to 3 editorial playlists",
    timestamp: "1d ago",
  },
  {
    id: "act-05",
    platform: "YouTube",
    summary: "Lyric video published, comments queued for review",
    timestamp: "2d ago",
  },
];
