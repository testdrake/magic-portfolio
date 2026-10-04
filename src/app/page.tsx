import {
  Badge,
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
import { about, baseURL, home, person, social } from "@/resources";
import { getTikTokData } from "@/utils/tiktok";

export async function generateMetadata() {
  return Meta.generate({ title: home.title, description: home.description, baseURL, path: home.path, image: home.image });
}

export default async function Home() {
  const tiktok = await getTikTokData();
  const profileLinks = social.filter((item) => item.link);

  return (
    <Column maxWidth="l" gap="xl" paddingY="12" horizontal="center" fillWidth>
      <Schema as="webPage" baseURL={baseURL} path="/" title={home.title} description={home.description} image={`${baseURL}${person.avatar}`} author={{ name: "Drake McMahan", url: `${baseURL}/about`, image: `${baseURL}${person.avatar}` }} />
      <Schema as="website" baseURL={baseURL} path="/about" title="Drake McMahan" description={home.description} image={`${baseURL}${person.avatar}`} />

      <Column fillWidth gap="l" paddingY="xl">
        <Badge background="brand-alpha-weak" onBackground="brand-strong" paddingX="12" paddingY="4" arrow={false}>Official creator portfolio</Badge>
        <Heading variant="display-strong-xl" wrap="balance">{home.headline}</Heading>
        <Column maxWidth="m"><Text variant="heading-default-xl" onBackground="neutral-weak" wrap="balance">{home.subline}</Text></Column>
        <Row gap="12" wrap paddingTop="m">
          <Button href="https://www.tiktok.com/@sheluvsdrak3" variant="primary" size="l" arrowIcon>Follow on TikTok</Button>
          <Button href="https://www.youtube.com/channel/@sheluvsdrak3" variant="secondary" size="l" arrowIcon>Watch on YouTube</Button>
        </Row>
      </Column>

      <Row fillWidth gap="l" s={{ direction: "column" }}>
        <Column flex={7} fillWidth background="neutral-alpha-weak" radius="l" overflow="hidden" minHeight={420}>
          <Media src="/images/avatar.jpg" alt="DrakeShi🍃, digital content creator and videographer" fill sizes="(max-width: 768px) 100vw, 65vw" />
        </Column>
        <Column flex={5} fillWidth gap="m" vertical="center" padding="l" background="brand-alpha-weak" radius="l">
          <Text variant="label-default-s" onBackground="brand-strong">THE CREATOR</Text>
          <Heading as="h2" variant="display-strong-s">A little chaos, a lot of personality.</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">DrakeShi🍃 is the online creator identity of Drake McMahan, bringing everyday moments to life through humor, lifestyle media, and relatable short-form videos.</Text>
          <Button href={about.path} variant="tertiary" arrowIcon>Meet DrakeShi</Button>
        </Column>
      </Row>

      <Column fillWidth gap="m" paddingTop="xl">
        <Row fillWidth horizontal="between" vertical="end"><Column gap="8"><Text variant="label-default-s" onBackground="brand-strong">LIVE FROM TIKTOK</Text><Heading as="h2" variant="display-strong-m">Latest on the feed</Heading></Column><Text variant="body-default-s" onBackground="neutral-weak">{tiktok.updatedAt ? `Updated ${tiktok.updatedAt}` : "Live data is configured server-side"}</Text></Row>
        <Column fillWidth background="neutral-alpha-weak" radius="l" padding="l" gap="l">
          {tiktok.available ? <Row gap="l" s={{ direction: "column" }}><Column flex={4} minHeight={280} background="page" radius="m" overflow="hidden"><Media src={tiktok.latestVideo?.thumbnail ?? person.avatar} alt={tiktok.latestVideo?.caption ?? "Latest DrakeShi TikTok"} fill sizes="(max-width: 768px) 100vw, 35vw" /></Column><Column flex={6} gap="m" vertical="center"><Heading as="h3" variant="heading-strong-l">{tiktok.latestVideo?.caption ?? "Latest DrakeShi video"}</Heading><Row gap="m" wrap>{tiktok.followers && <Text><strong>{tiktok.followers}</strong> followers</Text>}{tiktok.latestVideo?.views && <Text><strong>{tiktok.latestVideo.views}</strong> views</Text>}</Row>{tiktok.latestVideo?.url && <Button href={tiktok.latestVideo.url} variant="primary" arrowIcon>Watch on TikTok</Button>}</Column></Row> : <Column gap="m"><Heading as="h3" variant="heading-strong-l">Your next scroll-stopping moment.</Heading><Text variant="body-default-l" onBackground="neutral-weak">TikTok data is not available yet. Add a server-side source to show current stats and the latest video here—no numbers are fabricated.</Text><Button href="https://www.tiktok.com/@sheluvsdrak3" variant="secondary" arrowIcon>Open TikTok profile</Button></Column>}
        </Column>
      </Column>

      <Column fillWidth gap="m" paddingTop="xl"><Line /><Row fillWidth s={{ direction: "column" }} gap="l"><Column flex={4} gap="m"><Text variant="label-default-s" onBackground="brand-strong">FEATURED CONTENT</Text><Heading as="h2" variant="display-strong-m">Made to be shared.</Heading><Text variant="body-default-l" onBackground="neutral-weak">Relatable stories, situational comedy, and personality-first media from DrakeShi🍃.</Text><Button href="/work" variant="tertiary" arrowIcon>Explore featured content</Button></Column><Column flex={8} background="neutral-alpha-weak" radius="l" padding="l" gap="m"><Text variant="label-default-s" onBackground="neutral-weak">PRIMARY PLATFORM</Text><Heading as="h3" variant="display-strong-s">DrakeShi on TikTok</Heading><Text onBackground="neutral-weak">Short-form entertainment for the moments that feel a little too familiar.</Text><Button href="https://www.tiktok.com/@sheluvsdrak3" variant="primary" arrowIcon>Watch on TikTok</Button></Column></Row></Column>

      <Column fillWidth gap="m" paddingTop="xl" paddingBottom="l"><Line /><Row fillWidth horizontal="between" vertical="center" s={{ direction: "column", align: "start" }} gap="m"><Heading as="h2" variant="display-strong-s">Follow the next chapter.</Heading><Row gap="8" wrap>{profileLinks.map((item) => <Button key={item.name} href={item.link} variant="secondary" size="s">{item.name}</Button>)}</Row></Row></Column>
    </Column>
  );
}

export type { TikTokData } from "@/utils/tiktok";
