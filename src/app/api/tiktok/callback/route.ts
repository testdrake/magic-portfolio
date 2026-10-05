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

function page(
  title: string,
  message: string,
  success = true,
) {
  return new NextResponse(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />
  <title>${title} — DrakeShi</title>
  <style>
    * {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      min-height: 100%;
      background: #060913;
      color: #ffffff;
      font-family:
        Inter,
        ui-sans-serif,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;
    }

    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      overflow: hidden;
    }

    body::before {
      content: "";
      position: fixed;
      width: 520px;
      height: 520px;
      top: -260px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 187, 255, 0.16);
      filter: blur(120px);
      border-radius: 50%;
      pointer-events: none;
    }

    .card {
      width: 100%;
      max-width: 520px;
      padding: 48px 40px;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.09);
      border-radius: 28px;
      background:
        linear-gradient(
          145deg,
          rgba(255, 255, 255, 0.055),
          rgba(255, 255, 255, 0.018)
        );
      box-shadow:
        0 30px 80px rgba(0, 0, 0, 0.45),
        0 0 80px rgba(0, 187, 255, 0.07);
      backdrop-filter: blur(24px);
      animation: cardIn 650ms
        cubic-bezier(0.22, 1, 0.36, 1);
    }

    .icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 22px;
      background:
        linear-gradient(
          135deg,
          rgba(0, 187, 255, 0.18),
          rgba(75, 57, 204, 0.18)
        );
      border: 1px solid rgba(0, 187, 255, 0.22);
      box-shadow:
        0 0 40px rgba(0, 187, 255, 0.12);
    }

    .check {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #00bbff;
      color: #060913;
      font-size: 19px;
      font-weight: 900;
      box-shadow:
        0 0 24px rgba(0, 187, 255, 0.45);
    }

    .error {
      background: rgba(255, 70, 90, 0.12);
      border-color: rgba(255, 70, 90, 0.22);
    }

    .error .check {
      background: #ff465a;
      color: #ffffff;
      box-shadow:
        0 0 24px rgba(255, 70, 90, 0.35);
    }

    .brand {
      margin-bottom: 12px;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #00bbff;
    }

    h1 {
      margin: 0;
      font-size: clamp(30px, 7vw, 42px);
      line-height: 1.05;
      letter-spacing: -0.04em;
      font-weight: 750;
    }

    p {
      margin: 18px auto 0;
      max-width: 390px;
      color: rgba(255, 255, 255, 0.58);
      font-size: 15px;
      line-height: 1.7;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-top: 32px;
      padding: 13px 20px;
      border-radius: 14px;
      background: #ffffff;
      color: #060913;
      text-decoration: none;
      font-size: 14px;
      font-weight: 700;
      transition:
        transform 180ms ease,
        box-shadow 180ms ease;
    }

    .button:hover {
      transform: translateY(-2px);
      box-shadow:
        0 12px 30px rgba(0, 0, 0, 0.25);
    }

    .footer {
      margin-top: 28px;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.3);
    }

    @keyframes cardIn {
      from {
        opacity: 0;
        transform:
          translateY(18px)
          scale(0.97);
      }

      to {
        opacity: 1;
        transform:
          translateY(0)
          scale(1);
      }
    }

    @media (max-width: 520px) {
      .card {
        padding: 38px 24px;
        border-radius: 24px;
      }
    }
  </style>
</head>

<body>
  <main class="card">
    <div class="icon ${success ? "" : "error"}">
      <div class="check">
        ${success ? "✓" : "!"}
      </div>
    </div>

    <div class="brand">DrakeShi 🍃</div>

    <h1>${title}</h1>

    <p>${message}</p>

    <a
      class="button"
      href="https://magic-portfolio-bay-six.vercel.app/"
    >
      Back to website
    </a>

    <div class="footer">
      TikTok connection
    </div>
  </main>
</body>
</html>`,
    {
      status: success ? 200 : 400,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control":
          "no-store, no-cache, must-revalidate",
      },
    },
  );
}

export async function GET(
  request: NextRequest,
) {
  const searchParams =
    request.nextUrl.searchParams;

  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");
  const errorDescription =
    searchParams.get("error_description");

  if (error) {
    return page(
      "Connection failed",
      errorDescription ??
        error ??
        "TikTok authorization could not be completed.",
      false,
    );
  }

  if (!code || !state) {
    return page(
      "Something went wrong",
      "The TikTok authorization response was missing required information.",
      false,
    );
  }

  const cookieStore = await cookies();

  const savedState = cookieStore.get(
    "tiktok_oauth_state",
  )?.value;

  if (!savedState || savedState !== state) {
    return page(
      "Invalid session",
      "The authorization session could not be verified. Please start the TikTok connection again.",
      false,
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
    return page(
      "Configuration error",
      "The TikTok connection is missing required server configuration.",
      false,
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
    return page(
      "Connection failed",
      data.error_description ??
        data.error ??
        "TikTok token exchange failed.",
      false,
    );
  }

  return page(
    "TikTok connected",
    "Your TikTok account has been successfully connected. Your creator data can now be used by the website.",
    true,
  );
}
