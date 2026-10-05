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

const tiktokUrl = "https://www.tiktok.com/@sheluvsdrak3";
const youtubeUrl =
  "https://www.youtube.com/channel/@sheluvsdrak3";
const instagramUrl =
  "https://www.instagram.com/sheluvsdrak3/";

export default async function Home() {
  const tiktok = await getTikTokData();
  const video = tiktok.latestVideo;

  return (
    <Column as="main" fillWidth horizontal="center">
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
              Creating relatable short-form content built around
              humor, personality, and everyday moments.
            </Text>

            <Row gap="12" wrap marginTop="s">
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
        <Column fillWidth gap="m">
          <Column
            gap="8"
            className="latest-tiktok-header"
          >
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
              gap="xl"
              background="neutral-alpha-weak"
              radius="xl"
              padding="l"
              vertical="center"
              className="latest-tiktok-card"
              style={{
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow:
                  "0 24px 80px rgba(0, 0, 0, 0.22)",
              }}
              s={{
                direction: "column",
                gap: "l",
              }}
            >
              {/* SUBTLE GLOW */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-180px",
                  left: "-120px",
                  width: "420px",
                  height: "420px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(0,187,255,0.13), transparent 68%)",
                  pointerEvents: "none",
                }}
              />

              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: "-200px",
                  right: "-100px",
                  width: "420px",
                  height: "420px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(75,57,204,0.14), transparent 68%)",
                  pointerEvents: "none",
                }}
              />

              {/* VERTICAL TIKTOK MEDIA */}
              <Column
                className="latest-tiktok-media"
                position="relative"
                flex={1}
                aspectRatio="9/16"
                maxHeight={620}
                radius="l"
                overflow="hidden"
                background="page"
                style={{
                  position: "relative",
                  minHeight: 420,
                }}
              >
                <Media
                  src={
                    video.coverImageUrl ??
                    person.avatar
                  }
                  alt={
                    video.description ??
                    "Latest DrakeShi TikTok video"
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, 38vw"
                />

                {/* TIKTOK PILL */}
                <Row
                  gap="8"
                  vertical="center"
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    zIndex: 2,
                    padding:
                      "7px 11px",
                    borderRadius: 999,
                    background:
                      "rgba(6, 9, 19, 0.72)",
                    border:
                      "1px solid rgba(255,255,255,0.12)",
                    backdropFilter:
                      "blur(12px)",
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background:
                        "#00BBFF",
                      boxShadow:
                        "0 0 12px rgba(0,187,255,0.85)",
                    }}
                  />

                  <Text
                    variant="label-default-s"
                    style={{
                      color: "#fff",
                      fontSize: 11,
                    }}
                  >
                    TIKTOK
                  </Text>
                </Row>

                {/* BOTTOM GRADIENT */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: "35%",
                    background:
                      "linear-gradient(to top, rgba(6,9,19,0.48), transparent)",
                    pointerEvents: "none",
                  }}
                />
              </Column>

              {/* VIDEO INFORMATION */}
              <Column
                flex={1}
                gap="m"
                className="latest-tiktok-info"
                style={{
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Column gap="8">
                  <Text
                    variant="label-default-s"
                    onBackground="brand-strong"
                  >
                    @sheluvsdrak3
                  </Text>

                  <Heading
                    as="h3"
                    variant="display-strong-m"
                    wrap="balance"
                  >
                    {video.description ??
                      video.title ??
                      "Latest DrakeShi video"}
                  </Heading>
                </Column>

                <Text
                  variant="body-default-m"
                  onBackground="neutral-weak"
                  wrap="balance"
                >
                  The latest video from DrakeShi🍃,
                  featuring relatable moments,
                  humor, and everyday content.
                </Text>

                {/* VIDEO STATS */}
                <Row
                  fillWidth
                  gap="l"
                  wrap
                  paddingY="s"
                >
                  {video.viewCount !==
                    undefined && (
                    <Column gap="4">
                      <Text
                        variant="label-default-s"
                        onBackground="neutral-weak"
                      >
                        VIEWS
                      </Text>

                      <Text variant="heading-strong-m">
                        {video.viewCount.toLocaleString()}
                      </Text>
                    </Column>
                  )}

                  {video.likeCount !==
                    undefined && (
                    <Column gap="4">
                      <Text
                        variant="label-default-s"
                        onBackground="neutral-weak"
                      >
                        LIKES
                      </Text>

                      <Text variant="heading-strong-m">
                        {video.likeCount.toLocaleString()}
                      </Text>
                    </Column>
                  )}

                  {video.commentCount !==
                    undefined && (
                    <Column gap="4">
                      <Text
                        variant="label-default-s"
                        onBackground="neutral-weak"
                      >
                        COMMENTS
                      </Text>

                      <Text variant="heading-strong-m">
                        {video.commentCount.toLocaleString()}
                      </Text>
                    </Column>
                  )}
                </Row>

                {/* WATCH BUTTON */}
                <Row gap="12" wrap marginTop="s">
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
                    href={tiktokUrl}
                    variant="secondary"
                    arrowIcon
                  >
                    View Profile
                  </Button>
                </Row>

                {/* CREATOR LABEL */}
                <Row
                  gap="8"
                  vertical="center"
                  marginTop="s"
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background:
                        "#00BBFF",
                      boxShadow:
                        "0 0 14px rgba(0,187,255,0.7)",
                    }}
                  />

                  <Text
                    variant="body-default-s"
                    onBackground="neutral-weak"
                  >
                    DrakeShi🍃 · Digital Creator
                  </Text>
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
              <Column flex={1} gap="s">
                <Text variant="heading-strong-m">
                  Follow DrakeShi on TikTok
                </Text>

                <Text
                  variant="body-default-s"
                  onBackground="neutral-weak"
                >
                  The latest video will appear here
                  when TikTok data is available.
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
        <Column fillWidth gap="m">
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
            Explore featured content from DrakeShi🍃
            and @sheluvsdrak3.
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
          <Column flex={1} gap="m">
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

          <Column flex={1} gap="m">
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              wrap="balance"
            >
              DrakeShi🍃 is the creator identity of
              Drake McMahan, known online as
              @sheluvsdrak3. His content focuses on
              relatable humor, personality, everyday
              moments, and entertaining short-form
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
        <Column fillWidth gap="m">
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
