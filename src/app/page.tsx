import {
  Button,
  Column,
  Heading,
  Line,
  Media,
  Row,
  Schema,
  Text,
} from "@once-ui-system/core";
import { baseURL, home, person } from "@/resources";
import { getTikTokData } from "@/utils/tiktok";
import TikTokStats from "@/components/TikTokStats";

const tiktokUrl =
  "https://www.tiktok.com/@sheluvsdrak3";

const youtubeUrl =
  "https://www.youtube.com/channel/@sheluvsdrak3";

const instagramUrl =
  "https://www.instagram.com/sheluvsdrak3/";

const linkMeUrl =
  "https://link.me/@sheluvsdrak3";

export default async function Home() {
  const tiktok = await getTikTokData();
  const video = tiktok.latestVideo;

  return (
    <Column
      as="main"
      fillWidth
      horizontal="center"
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/"
        title={home.title}
        description={home.description}
        image={`${baseURL}${person.avatar}`}
        author={{
          name: "Drake McMahan",
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column
        maxWidth="m"
        fillWidth
        paddingX="l"
        paddingY="l"
        gap="xl"
      >
        {/* HERO */}

        <Row
          fillWidth
          gap="xl"
          vertical="center"
          s={{
            direction: "column",
            gap: "l",
          }}
        >
          <Column
            flex={1}
            gap="m"
            paddingY="l"
            s={{
              paddingY: "0",
            }}
          >
            <Text
              variant="label-default-s"
              onBackground="brand-strong"
            >
              @sheluvsdrak3
            </Text>

            <Heading
              as="h1"
              variant="display-strong-xl"
              wrap="balance"
            >
              DrakeShi🍃
            </Heading>

            <Text
              variant="heading-default-l"
              onBackground="neutral-weak"
              wrap="balance"
            >
              Digital Content Creator & Videographer
            </Text>

            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              wrap="balance"
            >
              Creating relatable short-form content built
              around humor, personality, and everyday
              moments.
            </Text>

            <Row
              gap="12"
              wrap
              marginTop="s"
            >
              <Button
                href={tiktokUrl}
                variant="primary"
                arrowIcon
              >
                TikTok
              </Button>

              <Button
                href={youtubeUrl}
                variant="secondary"
                arrowIcon
              >
                YouTube
              </Button>
            </Row>
          </Column>

          <Column
            flex={1}
            fillWidth
            aspectRatio="1/1"
            maxHeight={440}
            radius="xl"
            overflow="hidden"
            background="brand-alpha-weak"
          >
            <Media
              src={person.avatar}
              alt="DrakeShi, digital content creator and videographer"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </Column>
        </Row>

        {/* CREATOR STATS */}

        <TikTokStats />

        {/* LATEST TIKTOK */}

        <Column
          fillWidth
          gap="m"
        >
          <Column gap="8">
            <Text
              variant="label-default-s"
              onBackground="brand-strong"
            >
              LATEST ON TIKTOK
            </Text>

            <Heading
              as="h2"
              variant="display-strong-m"
              wrap="balance"
            >
              Latest video
            </Heading>
          </Column>

          {video ? (
            <Row
              fillWidth
              gap="l"
              background="neutral-alpha-weak"
              radius="xl"
              padding="l"
              s={{
                direction: "column",
                gap: "l",
              }}
            >
              {/* TIKTOK THUMBNAIL */}

              <Column
  flex={1}
  aspectRatio="9/16"
  maxHeight={520}
  radius="l"
  overflow="hidden"
  background="page"
  style={{
    position: "relative",
    boxShadow:
      "0 0 45px rgba(0, 187, 255, 0.10)",
  }}
>
  {video.coverImageUrl ? (
    <img
      src={video.coverImageUrl}
      alt={
        video.description ??
        "Latest DrakeShi TikTok video"
      }
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
  ) : (
    <Column
      fillWidth
      fillHeight
      horizontal="center"
      vertical="center"
      gap="s"
      padding="l"
    >
      <Text variant="heading-strong-m">
        Latest TikTok
      </Text>

      <Text
        variant="body-default-s"
        onBackground="neutral-weak"
      >
        @sheluvsdrak3
      </Text>
    </Column>
  )}

  <Row
    gap="8"
    vertical="center"
    style={{
      position: "absolute",
      top: "16px",
      left: "16px",
      zIndex: 2,
      padding: "7px 11px",
      borderRadius: "999px",
      background: "rgba(6, 9, 19, 0.82)",
      border:
        "1px solid rgba(255,255,255,0.12)",
      backdropFilter: "blur(10px)",
    }}
  >
    <span
      style={{
        width: "7px",
        height: "7px",
        borderRadius: "50%",
        background: "#00BBFF",
        boxShadow:
          "0 0 12px rgba(0, 187, 255, 0.8)",
      }}
    />

    <Text variant="label-default-s">
      TIKTOK
    </Text>
  </Row>
</Column>

              {/* VIDEO INFORMATION */}

              <Column
                flex={1}
                gap="m"
                vertical="center"
                paddingY="m"
              >
                <Text
                  variant="label-default-s"
                  onBackground="brand-strong"
                >
                  @sheluvsdrak3
                </Text>

                <Heading
                  as="h3"
                  variant="heading-strong-l"
                  wrap="balance"
                >
                  {video.description ??
                    video.title ??
                    "Latest DrakeShi video"}
                </Heading>

                <Text
                  variant="body-default-s"
                  onBackground="neutral-weak"
                >
                  {[
                    video.viewCount !==
                      undefined &&
                      `${video.viewCount.toLocaleString()} views`,
                    video.likeCount !==
                      undefined &&
                      `${video.likeCount.toLocaleString()} likes`,
                    video.commentCount !==
                      undefined &&
                      `${video.commentCount.toLocaleString()} comments`,
                  ]
                    .filter(Boolean)
                    .join(" • ")}
                </Text>

                <Row
                  gap="12"
                  wrap
                >
                  <Button
                    href={
                      video.shareUrl ??
                      tiktokUrl
                    }
                    variant="primary"
                    arrowIcon
                  >
                    Watch on TikTok
                  </Button>

                  <Button
                    href={linkMeUrl}
                    variant="secondary"
                    arrowIcon
                  >
                    All Links
                  </Button>
                </Row>
              </Column>
            </Row>
          ) : (
            <Row
              fillWidth
              background="neutral-alpha-weak"
              radius="xl"
              padding="l"
              gap="l"
              vertical="center"
              s={{
                direction: "column",
                align: "start",
              }}
            >
              <Column
                flex={1}
                gap="s"
              >
                <Text variant="heading-strong-m">
                  Follow DrakeShi on TikTok
                </Text>

                <Text
                  variant="body-default-s"
                  onBackground="neutral-weak"
                >
                  The latest video will appear here when
                  TikTok data is available.
                </Text>
              </Column>

              <Button
                href={tiktokUrl}
                variant="primary"
                arrowIcon
              >
                Open TikTok
              </Button>
            </Row>
          )}
        </Column>

        {/* FEATURED */}

        <Column
          fillWidth
          gap="m"
        >
          <Line />

          <Text
            variant="label-default-s"
            onBackground="brand-strong"
          >
            FEATURED CONTENT
          </Text>

          <Heading
            as="h2"
            variant="display-strong-m"
            wrap="balance"
          >
            DrakeShi on TikTok
          </Heading>

          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            wrap="balance"
          >
            Explore featured content from DrakeShi🍃 and
            @sheluvsdrak3.
          </Text>

          <Row>
            <Button
              href="/work/featured-tiktok"
              variant="secondary"
              arrowIcon
            >
              Explore featured content
            </Button>
          </Row>
        </Column>

        {/* ABOUT */}

        <Row
          fillWidth
          gap="xl"
          vertical="center"
          s={{
            direction: "column",
            gap: "l",
          }}
        >
          <Column
            flex={1}
            gap="m"
          >
            <Text
              variant="label-default-s"
              onBackground="brand-strong"
            >
              ABOUT DRAKESHI
            </Text>

            <Heading
              as="h2"
              variant="display-strong-m"
              wrap="balance"
            >
              Creator, personality, and storyteller.
            </Heading>
          </Column>

          <Column
            flex={1}
            gap="m"
          >
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              wrap="balance"
            >
              DrakeShi🍃 is the creator identity of Drake
              McMahan, known online as @sheluvsdrak3. His
              content focuses on relatable humor, personality,
              everyday moments, and entertaining short-form
              videos.
            </Text>

            <Row gap="12" wrap>
              <Button
                href="/about"
                variant="secondary"
                arrowIcon
              >
                About DrakeShi
              </Button>
            </Row>
          </Column>
        </Row>

        {/* SOCIAL LINKS */}

        <Column
          fillWidth
          gap="m"
        >
          <Line />

          <Row
            fillWidth
            horizontal="between"
            vertical="center"
            s={{
              direction: "column",
              align: "start",
              gap: "m",
            }}
          >
            <Column gap="4">
              <Text variant="heading-strong-m">
                Follow DrakeShi
              </Text>

              <Text
                variant="body-default-s"
                onBackground="neutral-weak"
              >
                @sheluvsdrak3
              </Text>
            </Column>

            <Row gap="8" wrap>
              <Button
                href={tiktokUrl}
                variant="tertiary"
                size="s"
              >
                TikTok
              </Button>

              <Button
                href={youtubeUrl}
                variant="tertiary"
                size="s"
              >
                YouTube
              </Button>

              <Button
                href={instagramUrl}
                variant="tertiary"
                size="s"
              >
                Instagram
              </Button>

              <Button
                href={linkMeUrl}
                variant="tertiary"
                size="s"
              >
                LinkMe
              </Button>
            </Row>
          </Row>
        </Column>

        {/* FOOTER */}

        <Row
          fillWidth
          horizontal="between"
          vertical="center"
          paddingY="m"
          s={{
            direction: "column",
            align: "start",
            gap: "s",
          }}
        >
          <Text
            variant="body-default-s"
            onBackground="neutral-weak"
          >
            DrakeShi🍃 · @sheluvsdrak3
          </Text>

          <Text
            variant="body-default-s"
            onBackground="neutral-weak"
          >
            © 2026 DrakeShi
          </Text>
        </Row>
      </Column>
    </Column>
  );
}

export const revalidate = 300;

export const metadata = {
  title: home.title,
  description: home.description,
};
