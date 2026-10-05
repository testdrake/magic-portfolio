import {
  Button,
  Column,
  Heading,
  Line,
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
        maxWidth="l"
        fillWidth
        paddingX="l"
        paddingY="l"
        gap="xl"
        s={{
          paddingX: "m",
          paddingY: "m",
          gap: "l",
        }}
      >
        {/* HERO */}

        <Row
          fillWidth
          gap="xl"
          vertical="center"
          s={{
            direction: "column",
            gap: "l",
            vertical: "start",
          }}
        >
          <Column
            flex={1}
            gap="m"
            paddingY="l"
            s={{
              paddingY: "0",
              fillWidth: true,
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
            maxHeight={500}
            radius="xl"
            overflow="hidden"
            background="brand-alpha-weak"
            s={{
              maxHeight: 420,
            }}
          >
            <img
              src={person.avatar}
              alt="DrakeShi, digital content creator and videographer"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Column>
        </Row>

        {/* TIKTOK STATS */}

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

            <Text
              variant="body-default-m"
              onBackground="neutral-weak"
              wrap="balance"
            >
              Watch the latest video from @sheluvsdrak3
              directly on the site.
            </Text>
          </Column>

          {video ? (
            <Row
              fillWidth
              gap="xl"
              background="neutral-alpha-weak"
              radius="xl"
              padding="l"
              vertical="center"
              s={{
                direction: "column",
                gap: "l",
                padding: "m",
              }}
            >
              {/* TIKTOK PLAYER */}

              <Column
                fillWidth
                horizontal="center"
                s={{
                  flex: 1,
                }}
              >
                <Column
                  aspectRatio="9/16"
                  radius="l"
                  overflow="hidden"
                  background="page"
                  style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "380px",
                    boxShadow:
                      "0 20px 60px rgba(0, 187, 255, 0.10)",
                  }}
                >
                  <iframe
                    src={`https://www.tiktok.com/player/v1/${video.id}?controls=1&description=1&music_info=1&rel=0&fullscreen_button=1&progress_bar=1&play_button=1&volume_control=1&timestamp=1`}
                    title={
                      video.description ??
                      "Latest DrakeShi TikTok video"
                    }
                    allow="fullscreen"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      display: "block",
                    }}
                  />
                </Column>
              </Column>

              {/* VIDEO INFORMATION */}

              <Column
                flex={1}
                fillWidth
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
                  variant="body-default-m"
                  onBackground="neutral-weak"
                  wrap="balance"
                >
                  {[
                    video.viewCount !== undefined &&
                      `${video.viewCount.toLocaleString()} views`,
                    video.likeCount !== undefined &&
                      `${video.likeCount.toLocaleString()} likes`,
                    video.commentCount !== undefined &&
                      `${video.commentCount.toLocaleString()} comments`,
                  ]
                    .filter(Boolean)
                    .join(" • ")}
                </Text>

                <Row
                  gap="12"
                  wrap
                  marginTop="s"
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

          <Row
            gap="12"
            wrap
          >
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
            vertical: "start",
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

            <Row
              gap="8"
              wrap
            >
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
