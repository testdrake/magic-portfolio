
import { getTikTokData } from "@/utils/tiktok";
import { Column, Heading, Row, Text } from "@once-ui-system/core";

interface ProjectsProps {
  range?: [number, number?];
}

export async function Projects({ range }: ProjectsProps) {
  const tiktok = await getTikTokData();
  const allVideos = tiktok.videos ?? [];

  const displayedVideos = range
    ? allVideos.slice(range[0] - 1, range[1] ?? allVideos.length)
    : allVideos;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      <Column gap="8">
        <Text variant="label-default-s" onBackground="brand-strong">
          TIKTOK
        </Text>

        <Heading
          as="h1"
          variant="display-strong-l"
          wrap="balance"
        >
          All TikToks
        </Heading>

        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
        >
          Explore the latest videos from @sheluvsdrak3.
        </Text>
      </Column>

      <Column fillWidth gap="l">
        {displayedVideos.map((video) => (
          <Row
            key={video.id}
            fillWidth
            background="neutral-alpha-weak"
            radius="xl"
            overflow="hidden"
            gap="l"
            padding="l"
            s={{
              direction: "column",
              padding: "m",
            }}
          >
            <Column
              fillWidth
              horizontal="center"
              vertical="center"
              style={{
                flex: 1,
              }}
            >
              <Column
                aspectRatio="9/16"
                radius="l"
                overflow="hidden"
                style={{
                  width: "100%",
                  maxWidth: "320px",
                }}
              >
                <iframe
                  src={`https://www.tiktok.com/player/v1/${video.id}?controls=1&description=1&music_info=1&rel=0&fullscreen_button=1&progress_bar=1&play_button=1&volume_control=1&timestamp=1`}
                  title={
                    video.description ??
                    video.title ??
                    "DrakeShi TikTok"
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

            <Column
              fillWidth
              gap="m"
              vertical="center"
              style={{
                flex: 1,
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
                  as="h2"
                  variant="display-strong-s"
                  wrap="balance"
                >
                  {video.description ??
                    video.title ??
                    "DrakeShi TikTok"}
                </Heading>
              </Column>

              <Row gap="l" wrap>
                {video.viewCount !== undefined && (
                  <Column gap="4">
                    <Text
                      variant="label-default-xs"
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
                      variant="label-default-xs"
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
                      variant="label-default-xs"
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

              <Row gap="12" wrap>
                <a
                  href={video.shareUrl ?? "https://www.tiktok.com/@sheluvsdrak3"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch on TikTok
                </a>
              </Row>
            </Column>
          </Row>
        ))}
      </Column>
    </Column>
  );
}

