import {
  Button,
  Column,
  Heading,
  Row,
  Text,
} from "@once-ui-system/core";
import type { TikTokVideo } from "@/utils/tiktok";

type LatestTikTokProps = {
  video?: TikTokVideo;
};

const tiktokUrl =
  "https://www.tiktok.com/@sheluvsdrak3";

const linkMeUrl =
  "https://link.me/@sheluvsdrak3";

export default function LatestTikTok({
  video,
}: LatestTikTokProps) {
  return (
    <Column fillWidth gap="m">
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
                  video.title ??
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

            {/* VIDEO STATS */}
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

            {/* ACTIONS */}
            <Row
              gap="12"
              wrap
              marginTop="s"
            >
              <Button
                href={video.shareUrl ?? tiktokUrl}
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
        /* FALLBACK */
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
  );
}
