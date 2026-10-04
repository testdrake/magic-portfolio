export type TikTokVideo = { url: string; caption?: string; thumbnail?: string; publishedAt?: string; views?: string; likes?: string; comments?: string; shares?: string };
export type TikTokData = { available: boolean; followers?: string; following?: string; likes?: string; latestVideo?: TikTokVideo; updatedAt?: string };

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
