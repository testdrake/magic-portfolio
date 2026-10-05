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
  id?: string | number;
  userId?: string | number;
  uniqueId?: string;
  username?: string;
  nickname?: string;
  displayName?: string;
  followers?: number;
  following?: number;
  likes?: number;
  videos?: number;
};

type LivecountsSearchResponse =
  | LivecountsUser[]
  | LivecountsUser
  | {
      user?: LivecountsUser;
      users?: LivecountsUser[];
      results?: LivecountsUser[];
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

function createHeaders(): Record<string, string> {
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
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36",
    "x-ajay": ajay,
    "x-catto": catto,
    "x-midas": midas,
  };
}

async function livecountsFetch(
  url: string,
): Promise<Response> {
  return fetch(url, {
    method: "GET",
    headers: createHeaders(),
    cache: "no-store",
  });
}

function normalizeUsers(
  data: LivecountsSearchResponse,
): LivecountsUser[] {
  if (Array.isArray(data)) {
    return data;
  }

  if ("users" in data && Array.isArray(data.users)) {
    return data.users;
  }

  if ("results" in data && Array.isArray(data.results)) {
    return data.results;
  }

  if ("user" in data && data.user) {
    return [data.user];
  }

  if (
    "username" in data ||
    "uniqueId" in data ||
    "userId" in data ||
    "id" in data
  ) {
    return [data];
  }

  return [];
}

async function findUser(
  username: string,
): Promise<LivecountsUser | null> {
  const response = await livecountsFetch(
    `${SEARCH_URL}/${encodeURIComponent(username)}`,
  );

  if (!response.ok) {
    return null;
  }

  const data =
    (await response.json()) as LivecountsSearchResponse;

  const users = normalizeUsers(data);

  return (
    users.find((user) => {
      const usernames = [
        user.username,
        user.uniqueId,
      ].filter(
        (value): value is string => Boolean(value),
      );

      return usernames.some(
        (value) =>
          value.toLowerCase() === username.toLowerCase(),
      );
    }) ?? users[0] ?? null
  );
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

function toNumber(
  value: unknown,
): number | undefined {
  return typeof value === "number" &&
    Number.isFinite(value)
    ? value
    : undefined;
}

export async function getTikTokData(): Promise<TikTokData> {
  const profile: TikTokProfile = {
    username: USERNAME,
    displayName: "DrakeShi🍃",
  };

  try {
    const user = await findUser(USERNAME);

    if (!user) {
      return {
        available: false,
        profile,
      };
    }

    const userId =
      user.userId?.toString() ??
      user.id?.toString();

    let stats: LivecountsUserStats = {
      followers: toNumber(user.followers),
      following: toNumber(user.following),
      likes: toNumber(user.likes),
      videos: toNumber(user.videos),
    };

    if (userId) {
      const apiStats = await getUserStats(userId);

      if (apiStats) {
        stats = {
          followers:
            toNumber(apiStats.followers) ??
            stats.followers,

          following:
            toNumber(apiStats.following) ??
            stats.following,

          likes:
            toNumber(apiStats.likes) ??
            stats.likes,

          videos:
            toNumber(apiStats.videos) ??
            stats.videos,
        };
      }
    }

    const hasStats =
      stats.followers !== undefined ||
      stats.following !== undefined ||
      stats.likes !== undefined ||
      stats.videos !== undefined;

    return {
      available: hasStats,
      profile,
      followers: stats.followers,
      following: stats.following,
      likes: stats.likes,
      videos: stats.videos,
      updatedAt: new Date().toISOString(),
    };
  } catch {
    return {
      available: false,
      profile,
    };
  }
}
