export type TikTokProfile = { username: string; displayName?: string };
export type TikTokVideo = {
  shareUrl?: string;
  description?: string;
  coverImageUrl?: string;
  publishedAt?: string;
  viewCount?: number;
  likeCount?: number;
  commentCount?: number;
};
export type TikTokData = {
  available: boolean;
  profile?: TikTokProfile;
  latestVideo?: TikTokVideo;
  followers?: number;
  following?: number;
  likes?: number;
  updatedAt?: string;
};

export async function getTikTokData(): Promise<TikTokData> {
  const source = process.env.TIKTOK_STATS_JSON;
  if (!source) return { available: false };
  try {
    const parsed = JSON.parse(source) as TikTokData;
    return { ...parsed, available: Boolean(parsed.available), updatedAt: parsed.updatedAt ?? new Date().toISOString() };
  } catch {
    return { available: false };
  }
}
