import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

type TikTokTokenResponse = {
  access_token?: string;
  refresh_token?: string;
  expires_in?: number;
  refresh_expires_in?: number;
  open_id?: string;
  scope?: string;
  token_type?: string;
  error?: string;
  error_description?: string;
};

export async function GET(
  request: NextRequest,
) {
  const searchParams = request.nextUrl.searchParams;

  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");
  const errorDescription =
    searchParams.get("error_description");

  if (error) {
    return new NextResponse(
      `TikTok authorization failed: ${
        errorDescription ?? error
      }`,
      {
        status: 400,
      },
    );
  }

  if (!code || !state) {
    return new NextResponse(
      "Missing authorization code or state.",
      {
        status: 400,
      },
    );
  }

  const cookieStore = await cookies();
  const savedState = cookieStore.get(
    "tiktok_oauth_state",
  )?.value;

  if (!savedState || savedState !== state) {
    return new NextResponse(
      "Invalid OAuth state.",
      {
        status: 400,
      },
    );
  }

  const clientKey =
    process.env.client_key;

  const clientSecret =
    process.env.client_secret;

  const redirectUri =
    process.env.TIKTOK_REDIRECT_URI;

  if (
    !clientKey ||
    !clientSecret ||
    !redirectUri
  ) {
    return new NextResponse(
      "TikTok environment variables are missing.",
      {
        status: 500,
      },
    );
  }

  const body = new URLSearchParams({
    client_key: clientKey,
    client_secret: clientSecret,
    code,
    grant_type: "authorization_code",
    redirect_uri: redirectUri,
  });

  const response = await fetch(
    "https://open.tiktokapis.com/v2/oauth/token/",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/x-www-form-urlencoded",
        "Cache-Control": "no-cache",
      },
      body,
    },
  );

  const data =
    (await response.json()) as TikTokTokenResponse;

  if (
    !response.ok ||
    !data.access_token ||
    !data.refresh_token
  ) {
    return NextResponse.json(
      {
        error:
          data.error ??
          "TikTok token exchange failed.",
        description:
          data.error_description,
      },
      {
        status: 400,
      },
    );
  }

  return NextResponse.json({
    success: true,
    message:
      "TikTok authorization succeeded.",
    openId: data.open_id,
    scope: data.scope,
    expiresIn: data.expires_in,
    refreshExpiresIn:
      data.refresh_expires_in,
    accessToken:
      data.access_token,
    refreshToken:
      data.refresh_token,
  });
}
