export type TikTokProfile = {
  username: string;
  displayName?: string;
};

export type TikTokVideo = {
  id: string;
  shareUrl?: string;
  embedLink?: string;
  description?: string;
  title?: string;
  coverImageUrl?: string;
  publishedAt?: string;
  viewCount?: number;
  likeCount?: number;
  commentCount?: number;
  shareCount?: number;
};

export type TikTokData = {
  available: boolean;
  profile?: TikTokProfile;
  latestVideo?: TikTokVideo;
  videos?: TikTokVideo[];
  followers?: number;
  following?: number;
  likes?: number;
  videoCount?: number;
  updatedAt?: string;
};

const USERNAME = "sheluvsdrak3";

const STATS_URL =
  "https://tiktok-api.tokcounter.com/user/stats/7254124266240951342";

const TIKTOK_VIDEO_LIST_URL =
  "https://open.tiktokapis.com/v2/video/list/";

const TIKTOK_VIDEO_QUERY_URL =
  "https://open.tiktokapis.com/v2/video/query/";

type TokCounterResponse = {
  success?: boolean;
  followerCount?: number;
  likeCount?: number;
  followingCount?: number;
  videoCount?: number;
};

type TikTokApiVideo = {
  id: string;
  create_time?: number;
  title?: string;
  video_description?: string;
  cover_image_url?: string;
  share_url?: string;
  embed_link?: string;
  view_count?: number;
  like_count?: number;
  comment_count?: number;
  share_count?: number;
};

type TikTokVideoListResponse = {
  data?: {
    videos?: TikTokApiVideo[];
    cursor?: number;
    has_more?: boolean;
  };
  error?: {
    code?: string;
    message?: string;
  };
};

type TikTokVideoQueryResponse = {
  data?: {
    videos?: TikTokApiVideo[];
  };
  error?: {
    code?: string;
    message?: string;
  };
};

async function getTokCounterStats() {
  try {
    const response = await fetch(STATS_URL, {
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/154.0.0.0 Safari/537.36",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const data =
      (await response.json()) as TokCounterResponse;

    if (data.success !== true) {
      return null;
    }

    return {
      followers: data.followerCount,
      likes: data.likeCount,
      following: data.followingCount,
      videoCount: data.videoCount,
    };
  } catch {
    return null;
  }
}

async function getTikTokVideoList(): Promise<TikTokApiVideo[]> {
  const accessToken = process.env.TIKTOK_ACCESS_TOKEN;

  if (!accessToken) {
    return [];
  }

  try {
    const fields = [
      "id",
      "create_time",
      "title",
      "video_description",
      "cover_image_url",
      "share_url",
      "embed_link",
      "view_count",
      "like_count",
      "comment_count",
      "share_count",
    ].join(",");

    const response = await fetch(
      `${TIKTOK_VIDEO_LIST_URL}?fields=${fields}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          max_count: 20,
        }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return [];
    }

    const data =
      (await response.json()) as TikTokVideoListResponse;

    if (!data.data?.videos) {
      return [];
    }

    return data.data.videos;
  } catch {
    return [];
  }
}

async function refreshTikTokVideos(
  videos: TikTokApiVideo[],
): Promise<TikTokApiVideo[]> {
  const accessToken = process.env.TIKTOK_ACCESS_TOKEN;

  if (!accessToken || videos.length === 0) {
    return videos;
  }

  const videoIds = videos
    .map((video) => video.id)
    .filter(Boolean)
    .slice(0, 20);

  if (videoIds.length === 0) {
    return videos;
  }

  try {
    const fields = [
      "id",
      "create_time",
      "title",
      "video_description",
      "cover_image_url",
      "share_url",
      "embed_link",
      "view_count",
      "like_count",
      "comment_count",
      "share_count",
    ].join(",");

    const response = await fetch(
      `${TIKTOK_VIDEO_QUERY_URL}?fields=${fields}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filters: {
            video_ids: videoIds,
          },
        }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return videos;
    }

    const data =
      (await response.json()) as TikTokVideoQueryResponse;

    if (!data.data?.videos) {
      return videos;
    }

    const refreshedVideos = new Map(
      data.data.videos.map((video) => [video.id, video]),
    );

    return videos.map((video) => ({
      ...video,
      ...(refreshedVideos.get(video.id) ?? {}),
    }));
  } catch {
    return videos;
  }
}

function mapTikTokVideo(
  video: TikTokApiVideo,
): TikTokVideo {
  return {
    id: video.id,
    title: video.title,
    description: video.video_description,
    coverImageUrl: video.cover_image_url,
    shareUrl: video.share_url,
    embedLink: video.embed_link,
    publishedAt: video.create_time
      ? new Date(
          video.create_time * 1000,
        ).toISOString()
      : undefined,
    viewCount: video.view_count,
    likeCount: video.like_count,
    commentCount: video.comment_count,
    shareCount: video.share_count,
  };
}

export async function getTikTokData(): Promise<TikTokData> {
  const profile: TikTokProfile = {
    username: USERNAME,
    displayName: "DrakeShi🍃",
  };

  const [stats, videoList] = await Promise.all([
    getTokCounterStats(),
    getTikTokVideoList(),
  ]);

  const refreshedVideos =
    await refreshTikTokVideos(videoList);

  const videos = refreshedVideos.map(mapTikTokVideo);

  return {
    available: Boolean(stats),
    profile,
    latestVideo: videos[0],
    videos,
    followers: stats?.followers,
    likes: stats?.likes,
    following: stats?.following,
    videoCount: stats?.videoCount,
    updatedAt: new Date().toISOString(),
  };
}
