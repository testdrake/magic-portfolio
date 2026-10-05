export type TikTokProfile = {
  username: string;
  displayName?: string;
};

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
  videos?: number;
  updatedAt?: string;
};

const USERNAME = "sheluvsdrak3";

const STATS_URL =
  "https://tiktok-api.tokcounter.com/user/stats/7254124266240951342";

type TokCounterResponse = {
  cache?: boolean;
  success?: boolean;
  followerCount?: number;
  likeCount?: number;
  followingCount?: number;
  videoCount?: number;
};

export async function getTikTokData(): Promise<TikTokData> {
  const profile: TikTokProfile = {
    username: USERNAME,
    displayName: "DrakeShi🍃",
  };

  try {
    const response = await fetch(STATS_URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/154.0.0.0 Safari/537.36",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        available: false,
        profile,
      };
    }

    const data =
      (await response.json()) as TokCounterResponse;

    if (data.success !== true) {
      return {
        available: false,
        profile,
      };
    }

    return {
      available: true,
      profile,
      followers: data.followerCount,
      likes: data.likeCount,
      following: data.followingCount,
      videos: data.videoCount,
      updatedAt: new Date().toISOString(),
    };
  } catch {
    return {
      available: false,
      profile,
    };
  }
}
