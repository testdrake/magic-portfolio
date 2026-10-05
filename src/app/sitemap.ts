import { getTikTokData } from "@/utils/tiktok";
import { baseURL, routes as routesConfig } from "@/resources";

export default async function sitemap() {
  const tiktok = await getTikTokData();

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) =>
      routesConfig[route as keyof typeof routesConfig],
  );

  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString(),
  }));

  const tiktoks = (tiktok.videos ?? []).map((video) => ({
    url: `${baseURL}/work/${video.id}`,
    lastModified: video.publishedAt
      ? new Date(video.publishedAt).toISOString()
      : new Date().toISOString(),
  }));

  return [...routes, ...tiktoks];
}
