import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";

export async function GET() {
  const clientKey = process.env.TIKTOK_CLIENT_KEY;
  const redirectUri = process.env.TIKTOK_REDIRECT_URI;

  if (!clientKey || !redirectUri) {
    return NextResponse.json(
      {
        error: "Missing TikTok environment variables.",
        checks: {
          clientKey: Boolean(clientKey),
          redirectUri: Boolean(redirectUri),
          clientSecret: Boolean(
            process.env.TIKTOK_CLIENT_SECRET,
          ),
        },
      },
      { status: 500 },
    );
  }

  const state = crypto.randomBytes(32).toString("hex");

  const cookieStore = await cookies();

  cookieStore.set("tiktok_oauth_state", state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 600,
    path: "/",
  });

  const params = new URLSearchParams({
    client_key: clientKey,
    response_type: "code",
    scope:
      "user.info.basic,user.info.profile,user.info.stats,video.list",
    redirect_uri: redirectUri,
    state,
  });

  return NextResponse.redirect(
    `https://www.tiktok.com/v2/auth/authorize/?${params.toString()}`,
  );
}
