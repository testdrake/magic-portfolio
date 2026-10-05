import {
  Avatar,
  Button,
  Column,
  Heading,
  Line,
  Media,
  Meta,
  Row,
  Schema,
  Text,
} from "@once-ui-system/core";
import { about, baseURL, person, social } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL,
    image: `${baseURL}${person.avatar}`,
    path: about.path,
  });
}

export default function About() {
  return (
    <Column
      maxWidth="l"
      fillWidth
      gap="xl"
      paddingY="l"
      paddingX="l"
      s={{
        paddingX: "m",
        paddingY: "m",
        gap: "l",
      }}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`${baseURL}${person.avatar}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* HERO */}

      <Column
        fillWidth
        gap="m"
        paddingY="l"
      >
        <Text
          variant="label-default-s"
          onBackground="brand-strong"
        >
          THE CREATOR
        </Text>

        <Heading
          as="h1"
          variant="display-strong-xl"
          wrap="balance"
        >
          About DrakeShi🍃
        </Heading>

        <Text
          variant="heading-default-l"
          onBackground="neutral-weak"
          wrap="balance"
        >
          Drake McMahan · @sheluvsdrak3
        </Text>

        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          wrap="balance"
        >
          Digital content creator and videographer creating
          relatable, personality-driven content built around
          humor, personality, and everyday moments.
        </Text>

        <Row
          gap="8"
          wrap
          marginTop="s"
        >
          {social.map(
            (item) =>
              item.link && (
                <Button
                  key={item.name}
                  href={item.link}
                  variant="secondary"
                  size="s"
                >
                  {item.name}
                </Button>
              ),
          )}
        </Row>
      </Column>

      {/* CREATOR PROFILE */}

      <Column
        fillWidth
        gap="m"
        padding="l"
        border="neutral-alpha-medium"
        borderStyle="solid"
        borderWidth={1}
        radius="l"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(circle at 50% 120%, rgba(0, 187, 255, 0.10), transparent 55%)",
          }}
        />

        <Text
          variant="label-default-s"
          onBackground="brand-strong"
          style={{
            position: "relative",
          }}
        >
          DRAKESHI🍃
        </Text>

        <Heading
          as="h2"
          variant="display-strong-m"
          wrap="balance"
          style={{
            position: "relative",
          }}
        >
          A personality-first creator.
        </Heading>

        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          wrap="balance"
          style={{
            position: "relative",
          }}
        >
          DrakeShi🍃 is the online creator identity of Drake
          McMahan, known across social platforms as
          @sheluvsdrak3.
        </Text>

        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          wrap="balance"
          style={{
            position: "relative",
          }}
        >
          His content centers around relatable humor,
          situational comedy, everyday moments, personality,
          and lifestyle-driven short-form content.
        </Text>
      </Column>

      {/* THE STORY */}

      <Row
        fillWidth
        gap="l"
        s={{
          direction: "column",
          gap: "m",
        }}
      >
        <Column
          flex={1}
          gap="m"
          padding="l"
          border="neutral-alpha-medium"
          borderStyle="solid"
          borderWidth={1}
          radius="l"
        >
          <Text
            variant="label-default-s"
            onBackground="brand-strong"
          >
            THE STORY
          </Text>

          <Heading
            as="h2"
            variant="heading-strong-xl"
            wrap="balance"
          >
            Built around personality and real moments.
          </Heading>
        </Column>

        <Column
          flex={1}
          gap="m"
          padding="l"
          background="neutral-alpha-weak"
          radius="l"
        >
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            wrap="balance"
          >
            DrakeShi started as an online identity built around
            sharing entertaining moments and connecting with
            people through short-form video.
          </Text>

          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            wrap="balance"
          >
            Over time, that identity grew into a creator brand
            centered around humor, personality, and relatable
            experiences.
          </Text>

          <Text
            variant="body-default-m"
            onBackground="neutral-weak"
            wrap="balance"
          >
            The goal is simple: create content that feels
            natural, entertaining, and worth sharing.
          </Text>
        </Column>
      </Row>

      {/* THE FOCUS */}

      <Column
        fillWidth
        gap="l"
      >
        <Line />

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
            flex={6}
            minHeight={420}
            radius="xl"
            overflow="hidden"
            background="brand-alpha-weak"
            s={{
              minHeight: 300,
            }}
          >
            <Media
              src="/images/gallery/horizontal-3.jpg"
              alt="DrakeShi🍃 creator gallery"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </Column>

          <Column
            flex={4}
            gap="m"
          >
            <Text
              variant="label-default-s"
              onBackground="brand-strong"
            >
              THE FOCUS
            </Text>

            <Heading
              as="h2"
              variant="display-strong-m"
              wrap="balance"
            >
              Everyday moments, turned up.
            </Heading>

            <Column
              gap="m"
            >
              <Text
                variant="body-default-l"
                onBackground="neutral-weak"
                wrap="balance"
              >
                From a quick joke to a full story, DrakeShi🍃
                brings an unmistakable point of view to the
                scroll.
              </Text>

              <Text
                variant="body-default-l"
                onBackground="neutral-weak"
                wrap="balance"
              >
                The content stays personal, casual, and
                personality-driven while always looking for a
                new way to entertain.
              </Text>
            </Column>

            <Row marginTop="s">
              <Button
                href="/gallery"
                variant="secondary"
                arrowIcon
              >
                Explore the gallery
              </Button>
            </Row>
          </Column>
        </Row>
      </Column>

      {/* CONTENT STYLE */}

      <Column
        fillWidth
        gap="l"
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
            CONTENT STYLE
          </Text>

          <Heading
            as="h2"
            variant="display-strong-m"
            wrap="balance"
          >
            What DrakeShi creates.
          </Heading>

          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            wrap="balance"
          >
            Personality, timing, humor, and moments people can
            recognize from their own lives.
          </Text>
        </Column>

        <Row
          fillWidth
          border="neutral-alpha-medium"
          borderStyle="solid"
          borderWidth={1}
          radius="l"
          padding="l"
          gap="l"
          s={{
            direction: "column",
            gap: "m",
          }}
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 50% 120%, rgba(0, 187, 255, 0.10), transparent 55%)",
            }}
          />

          <Column
            flex={1}
            gap="s"
            padding="m"
            style={{
              position: "relative",
            }}
          >
            <Text
              variant="label-default-s"
              onBackground="neutral-weak"
            >
              01
            </Text>

            <Heading
              as="h3"
              variant="heading-strong-l"
            >
              Relatable
            </Heading>

            <Text
              variant="body-default-s"
              onBackground="neutral-weak"
              wrap="balance"
            >
              Everyday situations and experiences turned into
              content viewers can recognize themselves in.
            </Text>
          </Column>

          <Column
            flex={1}
            gap="s"
            padding="m"
            style={{
              position: "relative",
            }}
          >
            <Text
              variant="label-default-s"
              onBackground="neutral-weak"
            >
              02
            </Text>

            <Heading
              as="h3"
              variant="heading-strong-l"
            >
              Humor
            </Heading>

            <Text
              variant="body-default-s"
              onBackground="neutral-weak"
              wrap="balance"
            >
              Comedy, reactions, and unexpected moments built
              around personality and timing.
            </Text>
          </Column>

          <Column
            flex={1}
            gap="s"
            padding="m"
            style={{
              position: "relative",
            }}
          >
            <Text
              variant="label-default-s"
              onBackground="neutral-weak"
            >
              03
            </Text>

            <Heading
              as="h3"
              variant="heading-strong-l"
            >
              Personality
            </Heading>

            <Text
              variant="body-default-s"
              onBackground="neutral-weak"
              wrap="balance"
            >
              Content where the creator himself is part of what
              makes each piece recognizable.
            </Text>
          </Column>
        </Row>
      </Column>

      {/* ONLINE */}

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
            ONLINE
          </Text>

          <Heading
            as="h2"
            variant="display-strong-m"
            wrap="balance"
          >
            Follow DrakeShi🍃
          </Heading>

          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            wrap="balance"
          >
            Find DrakeShi across social platforms for new
            content, updates, and more.
          </Text>
        </Column>

        <Column
          flex={1}
          gap="m"
          padding="l"
          border="neutral-alpha-medium"
          borderStyle="solid"
          borderWidth={1}
          radius="l"
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 100% 100%, rgba(75, 57, 204, 0.12), transparent 55%)",
            }}
          />

          <Text
            variant="heading-strong-m"
            style={{
              position: "relative",
            }}
          >
            @sheluvsdrak3
          </Text>

          <Text
            variant="body-default-s"
            onBackground="neutral-weak"
            style={{
              position: "relative",
            }}
          >
            TikTok · YouTube · Instagram · LinkMe
          </Text>

          <Row
            gap="8"
            wrap
            marginTop="s"
            style={{
              position: "relative",
            }}
          >
            {social.map(
              (item) =>
                item.link && (
                  <Button
                    key={item.name}
                    href={item.link}
                    variant="tertiary"
                    size="s"
                  >
                    {item.name}
                  </Button>
                ),
            )}
          </Row>
        </Column>
      </Row>

      {/* CLOSING */}

      <Column
        fillWidth
        gap="m"
        paddingY="l"
      >
        <Line />

        <Text
          variant="label-default-s"
          onBackground="brand-strong"
        >
          KEEP EXPLORING
        </Text>

        <Heading
          as="h2"
          variant="display-strong-m"
          wrap="balance"
        >
          Explore the world of DrakeShi🍃.
        </Heading>

        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          wrap="balance"
        >
          Browse the gallery, explore featured content, or
          connect with DrakeShi across social media.
        </Text>

        <Row
          gap="12"
          wrap
          marginTop="s"
        >
          <Button
            href="/work"
            variant="primary"
            arrowIcon
          >
            Featured content
          </Button>

          <Button
            href="/gallery"
            variant="secondary"
            arrowIcon
          >
            View gallery
          </Button>
        </Row>
      </Column>
    </Column>
  );
}

The **top avatar/image is completely removed**, while the `horizontal-3.jpg` image remains in **THE FOCUS**. I also separated the two focus paragraphs into their own `Column`, so they won't run together anymore.
