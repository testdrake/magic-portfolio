import { NextResponse } from "next/server";
import { getTikTokData } from "@/utils/tiktok";

export async function GET() {
  try {
    const data = await getTikTokData();

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch {
    return NextResponse.json(
      {
        available: false,
        profile: {
          username: "sheluvsdrak3",
          displayName: "DrakeShi🍃",
        },
      },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      },
    );
  }
}
