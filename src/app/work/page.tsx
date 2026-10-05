
import {
  Button,
  Column,
  Heading,
  Meta,
  Row,
  Schema,
  Text,
} from "@once-ui-system/core";
import Script from "next/script";
import { baseURL, person, work } from "@/resources";
import { getTikTokData } from "@/utils/tiktok";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL,
    image: `${baseURL}${person.avatar}`,
    path: work.path,
  });
}

export default async function Featured() {
  const tiktok = await getTikTokData();
  const videos = tiktok.videos ?? [];

  return (
    <Column
      maxWidth="l"
      fillWidth
      gap="xl"
      paddingY="12"
      paddingX="l"
      s={{ paddingX: "m" }}
    >
      <Script
        src="https://www.tiktok.com/embed.js"
        strategy="afterInteractive"
      />

      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`${baseURL}${person.avatar}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* HEADER */}
      <Column
        gap="m"
        paddingY="xl"
      >
        <Text
          variant="label-default-s"
          onBackground="brand-strong"
        >
          TIKTOK · @SHELUVSDRAK3
        </Text>

        <Heading
          as="h1"
          variant="display-strong-xl"
          wrap="balance"
        >
          Featured Content
        </Heading>

        <Text
          variant="heading-default-l"
          onBackground="neutral-weak"
          wrap="balance"
        >
          Explore DrakeShi🍃&apos;s latest videos, directly from
          TikTok.
        </Text>
      </Column>

      {/* TIKTOK VIDEOS */}
      <Column
        fillWidth
        gap="l"
      >
        {videos.length > 0 ? (
          videos.map((video) => {
            const videoUrl =
              video.shareUrl ??
              `https://www.tiktok.com/@sheluvsdrak3/video/${video.id}`;

            return (
              <Row
                key={video.id}
                fillWidth
                gap="xl"
                background="neutral-alpha-weak"
                radius="xl"
                overflow="hidden"
                padding="l"
                s={{
                  direction: "column",
                  gap: "l",
                  padding: "m",
                }}
              >
                {/* TIKTOK EMBED */}
                <Column
                  flex={1}
                  fillWidth
                  horizontal="center"
                  vertical="center"
                >
                  <Column
                    fillWidth
                    horizontal="center"
                    style={{
                      minWidth: 0,
                    }}
                  >
                    <blockquote
                      className="tiktok-embed"
                      cite={videoUrl}
                      data-video-id={video.id}
                      style={{
                        maxWidth: "605px",
                        minWidth: "325px",
                        width: "100%",
                        margin: 0,
                      }}
                    >
                      <section>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={videoUrl}
                        >
                          @sheluvsdrak3
                        </a>
                      </section>
                    </blockquote>
                  </Column>
                </Column>

                {/* VIDEO INFORMATION */}
                <Column
                  flex={1}
                  fillWidth
                  gap="l"
                  vertical="center"
                  padding="l"
                  s={{
                    padding: "m",
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
                      as="h2"
                      variant="display-strong-s"
                      wrap="balance"
                    >
                      {video.description ??
                        video.title ??
                        "DrakeShi TikTok"}
                    </Heading>
                  </Column>

                  {/* STATS */}
                  <Row
                    gap="l"
                    wrap
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

                    {video.shareCount !== undefined && (
                      <Column gap="4">
                        <Text
                          variant="label-default-xs"
                          onBackground="neutral-weak"
                        >
                          SHARES
                        </Text>

                        <Text variant="heading-strong-m">
                          {video.shareCount.toLocaleString()}
                        </Text>
                      </Column>
                    )}
                  </Row>

                  {/* DATE */}
                  {video.publishedAt && (
                    <Text
                      variant="body-default-s"
                      onBackground="neutral-weak"
                    >
                      {new Date(
                        video.publishedAt,
                      ).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </Text>
                  )}

                  <Button
                    href={videoUrl}
                    variant="primary"
                    arrowIcon
                  >
                    Watch on TikTok
                  </Button>
                </Column>
              </Row>
            );
          })
        ) : (
          <Column
            fillWidth
            padding="xl"
            gap="m"
            background="neutral-alpha-weak"
            radius="xl"
          >
            <Heading
              as="h2"
              variant="heading-strong-l"
            >
              No TikToks available
            </Heading>

            <Text
              variant="body-default-m"
              onBackground="neutral-weak"
            >
              TikTok videos could not be loaded right now.
            </Text>

            <Button
              href="https://www.tiktok.com/@sheluvsdrak3"
              variant="primary"
              arrowIcon
            >
              Open TikTok
            </Button>
          </Column>
        )}
      </Column>

      {/* BOTTOM */}
      <Row
        fillWidth
        gap="l"
        paddingTop="xl"
        s={{
          direction: "column",
        }}
      >
        <Column
          flex={1}
          background="neutral-alpha-weak"
          radius="l"
          padding="l"
          gap="m"
        >
          <Heading
            as="h3"
            variant="heading-strong-l"
          >
            Follow DrakeShi🍃
          </Heading>

          <Text
            variant="body-default-m"
            onBackground="neutral-weak"
          >
            New videos and creator updates are posted on
            @sheluvsdrak3.
          </Text>

          <Button
            href="https://www.tiktok.com/@sheluvsdrak3"
            variant="secondary"
            arrowIcon
          >
            Follow on TikTok
          </Button>
        </Column>

        <Column
          flex={1}
          background="brand-alpha-weak"
          radius="l"
          padding="l"
          gap="m"
        >
          <Heading
            as="h3"
            variant="heading-strong-l"
          >
            Explore more
          </Heading>

          <Text
            variant="body-default-m"
            onBackground="neutral-weak"
          >
            See photos, creator moments, and more from
            DrakeShi🍃.
          </Text>

          <Button
            href="/gallery"
            variant="tertiary"
            arrowIcon
          >
            Open Gallery
          </Button>
        </Column>
      </Row>
    </Column>
  );
}
