import { NextResponse } from "next/server";
import { getTikTokData } from "@/utils/tiktok";

export async function GET() {
  const data = await getTikTokData();
  return NextResponse.json(data, { headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=600" } });
}
