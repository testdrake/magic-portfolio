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
"[https://www.tiktok.com/@sheluvsdrak3](https://www.tiktok.com/@sheluvsdrak3)";

const linkMeUrl =
"[https://link.me/@sheluvsdrak3](https://link.me/@sheluvsdrak3)";

export default function LatestTikTok({
video,
}: LatestTikTokProps) {
return (
\<Column fillWidth gap="l">
{/\* SECTION HEADER \*/}


  <Row
    fillWidth
    horizontal="between"
    vertical="end"
    s={{
      direction: "column",
      align: "start",
      gap: "s",
    }}
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

    <Text
      variant="body-default-s"
      onBackground="neutral-weak"
    >
      @sheluvsdrak3
    </Text>
  </Row>

  {video ? (
    <Row
      fillWidth
      background="neutral-alpha-weak"
      radius="xl"
      overflow="hidden"
      style={{
        minHeight: "620px",
      }}
      s={{
        direction: "column",
        style: {
          minHeight: "auto",
        },
      }}
    >
      {/* VIDEO */}

      <Column
        flex={1}
        fillWidth
        horizontal="center"
        vertical="center"
        padding="l"
        background="page"
        s={{
          padding: "m",
        }}
      >
        <Column
          aspectRatio="9/16"
          radius="l"
          overflow="hidden"
          style={{
            width: "100%",
            maxWidth: "360px",
            boxShadow:
              "0 24px 80px rgba(0, 187, 255, 0.12)",
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

      {/* INFORMATION */}

      <Column
        flex={1}
        fillWidth
        padding="xl"
        gap="l"
        vertical="center"
        s={{
          padding: "l",
          gap: "m",
          vertical: "start",
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
            variant="display-strong-s"
            wrap="balance"
          >
            {video.description ??
              video.title ??
              "Latest DrakeShi video"}
          </Heading>
        </Column>

        {/* STATS */}

        <Row
          fillWidth
          gap="l"
          paddingY="m"
          border="neutral-alpha-weak"
          borderStyle="solid"
          borderWidth={1}
          radius="l"
          paddingX="m"
          s={{
            gap: "m",
            wrap: true,
          }}
        >
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

        {/* DESCRIPTION */}

        <Text
          variant="body-default-m"
          onBackground="neutral-weak"
          wrap="balance"
        >
          Watch the latest video from DrakeShi directly
          on the site, or continue watching on TikTok.
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

        {/* BRANDING */}

        <Row
          fillWidth
          horizontal="between"
          vertical="center"
          marginTop="m"
        >
          <Text
            variant="body-default-xs"
            onBackground="neutral-weak"
          >
            DrakeShi🍃
          </Text>

          <Text
            variant="body-default-xs"
            onBackground="neutral-weak"
          >
            TikTok
          </Text>
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
        padding: "l",
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
