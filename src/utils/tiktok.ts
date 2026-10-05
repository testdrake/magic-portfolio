import crypto from "node:crypto";

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

type LivecountsUser = {
  id?: string;
  userId?: string;
  uniqueId?: string;
  username?: string;
  nickname?: string;
  displayName?: string;
};

type LivecountsUserStats = {
  followers?: number;
  following?: number;
  likes?: number;
  videos?: number;
};

const USERNAME = "sheluvsdrak3";

const SEARCH_URL = "https://tiktok.livecounts.io/user/search";
const STATS_URL = "https://tiktok.livecounts.io/user/stats";

function createHeaders() {
  const catto = Date.now().toString();

  const ajay = crypto
    .createHash("sha1")
    .update(catto)
    .digest("hex");

  const midas = crypto
    .createHash("sha384")
    .update(ajay + catto)
    .digest("hex");

  return {
    Accept: "application/json",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/154.0.0.0 Safari/537.36",
    "x-ajay": ajay,
    "x-catto": catto,
    "x-midas": midas,
  };
}

async function livecountsFetch(
  url: string,
  init: RequestInit = {},
): Promise<Response> {
  const headers = {
    ...createHeaders(),
    ...(init.headers ?? {}),
  };

  return fetch(url, {
    ...init,
    headers,
    cache: "no-store",
  });
}

async function findUserId(username: string): Promise<string | null> {
  const url = `${SEARCH_URL}/${encodeURIComponent(username)}`;

  const response = await livecountsFetch(url);

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as
    | LivecountsUser
    | LivecountsUser[]
    | {
        user?: LivecountsUser;
        users?: LivecountsUser[];
        results?: LivecountsUser[];
      };

  const users: LivecountsUser[] = Array.isArray(data)
    ? data
    : "users" in data && Array.isArray(data.users)
      ? data.users
      : "results" in data && Array.isArray(data.results)
        ? data.results
        : "user" in data && data.user
          ? [data.user]
          : [data];

  const match = users.find((user) => {
    const values = [
      user.username,
      user.uniqueId,
      user.id,
      user.userId,
    ].filter(Boolean);

    return values.some(
      (value) =>
        String(value).toLowerCase() === username.toLowerCase(),
    );
  });

  if (!match) {
    return null;
  }

  return match.userId ?? match.id ?? null;
}

async function getUserStats(
  userId: string,
): Promise<LivecountsUserStats | null> {
  const response = await livecountsFetch(
    `${STATS_URL}/${encodeURIComponent(userId)}`,
  );

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as LivecountsUserStats;
}

export async function getTikTokData(): Promise<TikTokData> {
  try {
    const userId = await findUserId(USERNAME);

    if (!userId) {
      return {
        available: false,
        profile: {
          username: USERNAME,
          displayName: "DrakeShi🍃",
        },
      };
    }

    const stats = await getUserStats(userId);

    if (!stats) {
      return {
        available: false,
        profile: {
          username: USERNAME,
          displayName: "DrakeShi🍃",
        },
      };
    }

    return {
      available: true,
      profile: {
        username: USERNAME,
        displayName: "DrakeShi🍃",
      },
      followers:
        typeof stats.followers === "number"
          ? stats.followers
          : undefined,
      following:
        typeof stats.following === "number"
          ? stats.following
          : undefined,
      likes:
        typeof stats.likes === "number"
          ? stats.likes
          : undefined,
      videos:
        typeof stats.videos === "number"
          ? stats.videos
          : undefined,
      updatedAt: new Date().toISOString(),
    };
  } catch {
    return {
      available: false,
      profile: {
        username: USERNAME,
        displayName: "DrakeShi🍃",
      },
    };
  }
}
