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
            style={{
              animation:
                "latestFadeUp 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
            }}
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
              padding="l"
              radius="xl"
              background="neutral-alpha-weak"
              vertical="center"
              s={{
                direction: "column",
                gap: "l",
              }}
              style={{
                position: "relative",
                overflow: "hidden",
                border:
                  "1px solid rgba(255, 255, 255, 0.07)",
                background:
                  "linear-gradient(135deg, rgba(0, 187, 255, 0.07), rgba(75, 57, 204, 0.06) 45%, rgba(255, 255, 255, 0.025))",
                boxShadow:
                  "0 25px 70px rgba(0, 0, 0, 0.25)",
                animation:
                  "latestCardIn 850ms cubic-bezier(0.22, 1, 0.36, 1) 100ms both",
              }}
            >
              {/* BACKGROUND GLOW */}
              <div
                style={{
                  position: "absolute",
                  width: "380px",
                  height: "380px",
                  left: "-180px",
                  bottom: "-230px",
                  borderRadius: "50%",
                  background:
                    "rgba(0, 187, 255, 0.13)",
                  filter: "blur(110px)",
                  pointerEvents: "none",
                }}
              />

              {/* VIDEO */}
              <Column
                flex={1}
                fillWidth
                aspectRatio="9/16"
                maxHeight={560}
                radius="l"
                overflow="hidden"
                background="page"
                style={{
                  position: "relative",
                  zIndex: 1,
                  border:
                    "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow:
                    "0 20px 50px rgba(0, 0, 0, 0.35)",
                  animation:
                    "latestMediaIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 250ms both",
                  transition:
                    "transform 400ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 400ms ease",
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
                  sizes="(max-width: 768px) 100vw, 40vw"
                />

                {/* TIKTOK LABEL */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    padding: "7px 11px",
                    borderRadius: "999px",
                    background:
                      "rgba(6, 9, 19, 0.72)",
                    border:
                      "1px solid rgba(255, 255, 255, 0.10)",
                    backdropFilter: "blur(12px)",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                  }}
                >
                  TIKTOK
                </div>
              </Column>

              {/* INFO */}
              <Column
                flex={1}
                gap="l"
                vertical="center"
                style={{
                  position: "relative",
                  zIndex: 1,
                  animation:
                    "latestInfoIn 750ms cubic-bezier(0.22, 1, 0.36, 1) 350ms both",
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
                    variant="heading-strong-l"
                    wrap="balance"
                  >
                    {video.description ??
                      "Latest DrakeShi video"}
                  </Heading>
                </Column>

                {/* STATS */}
                <Row
                  gap="l"
                  wrap
                  style={{
                    paddingTop: "4px",
                    paddingBottom: "4px",
                  }}
                >
                  {video.viewCount !== undefined && (
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

                  {video.likeCount !== undefined && (
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

                  {video.commentCount !== undefined && (
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

                <Line />

                {/* FOOTER */}
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
                    <Text variant="body-default-s">
                      DrakeShi🍃
                    </Text>

                    <Text
                      variant="body-default-s"
                      onBackground="neutral-weak"
                    >
                      Latest post from TikTok
                    </Text>
                  </Column>

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
                </Row>
              </Column>
            </Row>
          ) : (
            <Row
              fillWidth
              background="neutral-alpha-weak"
              radius="xl"
              padding="xl"
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
                  The latest video will appear here when TikTok
                  data is available.
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

      <style jsx>{`
        @keyframes latestFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes latestCardIn {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes latestMediaIn {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes latestInfoIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (hover: hover) and (pointer: fine) {
          .latest-tiktok-media:hover {
            transform: scale(1.015);
            box-shadow:
              0 25px 65px rgba(0, 187, 255, 0.16);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </Column>
  );
}

export const revalidate = 300;

export const metadata = {
  title: home.title,
  description: home.description,
};
