
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
import TikTokStats from "@/components/TikTokStats";

const tiktokUrl =
  "https://www.tiktok.com/@sheluvsdrak3";

const youtubeUrl =
  "https://www.youtube.com/channel/@sheluvsdrak3";

const instagramUrl =
  "https://www.instagram.com/sheluvsdrak3/";

export default function Home() {
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

        {/* FEATURED CONTENT */}

        <Column
          fillWidth
          gap="l"
          paddingY="m"
        >
          <Line />

          <Column
            gap="m"
            maxWidth="m"
          >
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
              DrakeShi across social media.
            </Heading>

            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              wrap="balance"
            >
              Explore DrakeShi🍃, discover featured work, and
              follow the creator journey across social
              platforms.
            </Text>
          </Column>

          <Row
            fillWidth
            gap="m"
            s={{
              direction: "column",
            }}
          >
            <Column
              flex={1}
              gap="m"
              padding="l"
              background="neutral-alpha-weak"
              radius="xl"
            >
              <Text
                variant="label-default-s"
                onBackground="brand-strong"
              >
                TIKTOK
              </Text>

              <Heading
                as="h3"
                variant="heading-strong-l"
                wrap="balance"
              >
                @sheluvsdrak3
              </Heading>

              <Text
                variant="body-default-s"
                onBackground="neutral-weak"
                wrap="balance"
              >
                Relatable humor, personality, everyday moments,
                and short-form content.
              </Text>

              <Button
                href={tiktokUrl}
                variant="primary"
                size="s"
                arrowIcon
              >
                Visit TikTok
              </Button>
            </Column>

            <Column
              flex={1}
              gap="m"
              padding="l"
              background="brand-alpha-weak"
              radius="xl"
            >
              <Text
                variant="label-default-s"
                onBackground="brand-strong"
              >
                YOUTUBE
              </Text>

              <Heading
                as="h3"
                variant="heading-strong-l"
                wrap="balance"
              >
                DrakeShi on YouTube
              </Heading>

              <Text
                variant="body-default-s"
                onBackground="neutral-weak"
                wrap="balance"
              >
                Video content, creator projects, and more
                from DrakeShi🍃.
              </Text>

              <Button
                href={youtubeUrl}
                variant="secondary"
                size="s"
                arrowIcon
              >
                Visit YouTube
              </Button>
            </Column>

            <Column
              flex={1}
              gap="m"
              padding="l"
              background="neutral-alpha-weak"
              radius="xl"
            >
              <Text
                variant="label-default-s"
                onBackground="brand-strong"
              >
                GALLERY
              </Text>

              <Heading
                as="h3"
                variant="heading-strong-l"
                wrap="balance"
              >
                Visuals & moments
              </Heading>

              <Text
                variant="body-default-s"
                onBackground="neutral-weak"
                wrap="balance"
              >
                Explore photos, creator visuals, and highlights
                from DrakeShi🍃.
              </Text>

              <Button
                href="/gallery"
                variant="tertiary"
                size="s"
                arrowIcon
              >
                Open Gallery
              </Button>
            </Column>
          </Row>
        </Column>

        {/* ABOUT */}

        <Row
          fillWidth
          gap="xl"
          vertical="center"
          paddingY="m"
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
              content.
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
          paddingY="m"
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
                href="https://link.me/@sheluvsdrak3"
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
