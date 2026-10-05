
import {
  Avatar,
  Button,
  Column,
  Heading,
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
      paddingY="12"
      paddingX="l"
      s={{ paddingX: "m" }}
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

      {/* INTRO */}
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
          flex={4}
          gap="m"
          vertical="center"
        >
          <Avatar
            src={person.avatar}
            size="xl"
          />

          <Text
            variant="label-default-s"
            onBackground="brand-strong"
          >
            THE CREATOR
          </Text>

          <Heading
            as="h1"
            variant="display-strong-l"
            wrap="balance"
          >
            About DrakeShi🍃
          </Heading>

          <Text
            variant="heading-default-m"
            onBackground="neutral-weak"
          >
            Drake McMahan · @sheluvsdrak3
          </Text>

          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            wrap="balance"
          >
            Digital content creator and videographer creating
            relatable, personality-driven short-form content.
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

        <Column
          flex={6}
          gap="l"
          padding="xl"
          background="neutral-alpha-weak"
          radius="xl"
        >
          <Text
            variant="label-default-s"
            onBackground="brand-strong"
          >
            DRAKESHI🍃
          </Text>

          <Heading
            as="h2"
            variant="heading-strong-xl"
            wrap="balance"
          >
            A personality-first creator.
          </Heading>

          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
          >
            DrakeShi🍃 is the online creator identity of Drake
            McMahan, known across social platforms as
            @sheluvsdrak3.
          </Text>

          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
          >
            His content centers around relatable humor,
            situational comedy, everyday moments, personality,
            and lifestyle-driven short-form videos.
          </Text>

          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
          >
            Rather than following one fixed format, DrakeShi
            focuses on making content that feels natural,
            entertaining, and easy for viewers to connect with.
          </Text>
        </Column>
      </Row>

      {/* CREATOR STORY */}
      <Column
        fillWidth
        gap="m"
      >
        <Text
          variant="label-default-s"
          onBackground="brand-strong"
        >
          THE STORY
        </Text>

        <Heading
          as="h2"
          variant="display-strong-m"
          wrap="balance"
        >
          Built around personality and real moments.
        </Heading>

        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          wrap="balance"
        >
          DrakeShi started as an online identity built around
          sharing entertaining moments and connecting with
          people through short-form video. Over time, that
          identity grew into a recognizable creator brand
          centered around humor, personality, and relatable
          experiences.
        </Text>

        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          wrap="balance"
        >
          The goal is simple: make videos that feel like
          something you would send to a friend, talk about
          later, or watch again.
        </Text>
      </Column>

      {/* IMAGE + FOCUS */}
      <Row
        fillWidth
        gap="l"
        vertical="center"
        s={{
          direction: "column",
          gap: "l",
        }}
      >
        <Column
          flex={7}
          minHeight={400}
          radius="xl"
          overflow="hidden"
        >
          <Media
            src="/images/gallery/horizontal-3.jpg"
            alt="DrakeShi🍃 creator gallery"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </Column>

        <Column
          flex={5}
          gap="m"
          vertical="center"
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

          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
          >
            From a quick joke to a full story, DrakeShi🍃 brings
            an unmistakable point of view to the scroll.
          </Text>

          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
          >
            The content stays personal, casual, and
            personality-driven while always looking for a new
            way to entertain.
          </Text>

          <Button
            href="/gallery"
            variant="tertiary"
            arrowIcon
          >
            Enter the gallery
          </Button>
        </Column>
      </Row>

      {/* CONTENT STYLE */}
      <Column
        fillWidth
        gap="l"
      >
        <Column gap="m">
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
          >
            The content is built around the things that make
            short-form video entertaining: personality, timing,
            humor, and moments people can recognize from their
            own lives.
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
            gap="s"
            padding="l"
            background="neutral-alpha-weak"
            radius="l"
          >
            <Heading
              as="h3"
              variant="heading-strong-l"
            >
              Relatable
            </Heading>

            <Text
              variant="body-default-s"
              onBackground="neutral-weak"
            >
              Everyday situations and experiences turned into
              content viewers can recognize themselves in.
            </Text>
          </Column>

          <Column
            flex={1}
            gap="s"
            padding="l"
            background="neutral-alpha-weak"
            radius="l"
          >
            <Heading
              as="h3"
              variant="heading-strong-l"
            >
              Humor
            </Heading>

            <Text
              variant="body-default-s"
              onBackground="neutral-weak"
            >
              Comedy, reactions, and unexpected moments built
              around personality and timing.
            </Text>
          </Column>

          <Column
            flex={1}
            gap="s"
            padding="l"
            background="neutral-alpha-weak"
            radius="l"
          >
            <Heading
              as="h3"
              variant="heading-strong-l"
            >
              Personality
            </Heading>

            <Text
              variant="body-default-s"
              onBackground="neutral-weak"
            >
              Content where the creator himself is part of what
              makes each video recognizable.
            </Text>
          </Column>
        </Row>
      </Column>

      {/* SOCIAL PRESENCE */}
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
          >
            Find DrakeShi across social platforms for new
            videos, updates, and behind-the-scenes content.
          </Text>
        </Column>

        <Column
          flex={1}
          gap="s"
          padding="l"
          background="neutral-alpha-weak"
          radius="l"
        >
          <Text
            variant="heading-strong-m"
          >
            @sheluvsdrak3
          </Text>

          <Text
            variant="body-default-s"
            onBackground="neutral-weak"
          >
            TikTok · YouTube · Instagram · LinkMe
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
          There is more to DrakeShi🍃.
        </Heading>

        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          wrap="balance"
        >
          Explore the latest TikToks, browse the creator
          gallery, or connect with DrakeShi across social media.
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
            Explore TikToks
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
