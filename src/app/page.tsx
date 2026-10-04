import { Button, Column, Heading, Line, Media, Row, Schema, Text } from "@once-ui-system/core";
import { baseURL, home, person, social } from "@/resources";
import { getTikTokData } from "@/utils/tiktok";

const tiktokUrl = "https://www.tiktok.com/@sheluvsdrak3";
const youtubeUrl = "https://www.youtube.com/channel/@sheluvsdrak3";

export default async function Home() {
  const tiktok = await getTikTokData();
  const video = tiktok.latestVideo;

  return (
    <Column as="main" fillWidth horizontal="center">
      <Schema as="webPage" baseURL={baseURL} path="/" title={home.title} description={home.description} image={`${baseURL}${person.avatar}`} author={{ name: "Drake McMahan", url: `${baseURL}/about`, image: `${baseURL}${person.avatar}` }} />
      <Column maxWidth="m" fillWidth paddingX="l" gap="xl" paddingY="l">
        <Row fillWidth gap="xl" vertical="center" s={{ direction: "column", gap: "l" }}>
          <Column flex={1} gap="m">
            <Text variant="label-default-s" onBackground="brand-strong">@sheluvsdrak3</Text>
            <Heading variant="display-strong-xl" wrap="balance">DrakeShi🍃</Heading>
            <Text variant="heading-default-l" onBackground="neutral-weak">Digital Content Creator & Videographer</Text>
            <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">Relatable short-form content built around humor, personality, and everyday moments.</Text>
            <Row gap="12" wrap>
              <Button href={tiktokUrl} variant="primary" arrowIcon>TikTok</Button>
              <Button href={youtubeUrl} variant="secondary" arrowIcon>YouTube</Button>
            </Row>
          </Column>
          <Column flex={1} fillWidth aspectRatio="1/1" maxHeight={420} radius="xl" overflow="hidden" background="brand-alpha-weak">
            <Media src={person.avatar} alt="DrakeShi, digital content creator and videographer" fill sizes="(max-width: 768px) 100vw, 42vw" />
          </Column>
        </Row>

        <Row fillWidth border="neutral-alpha-medium" borderStyle="solid" borderWidth="1" radius="l" padding="m" gap="l" wrap s={{ direction: "column", gap: "m" }}>
          {tiktok.profile ? <>
            <Column flex={1}><Text variant="label-default-s" onBackground="neutral-weak">TIKTOK</Text><Text variant="heading-strong-m">@{tiktok.profile.username}</Text></Column>
            <Column flex={1}><Text variant="label-default-s" onBackground="neutral-weak">PROFILE</Text><Text variant="heading-strong-m">{tiktok.profile.displayName}</Text></Column>
          </> : <Column fillWidth><Text variant="heading-strong-m">TikTok</Text><Text onBackground="neutral-weak">@sheluvsdrak3</Text></Column>}
          {video?.viewCount !== undefined && <Column flex={1}><Text variant="label-default-s" onBackground="neutral-weak">VIEWS</Text><Text variant="heading-strong-m">{video.viewCount.toLocaleString()}</Text></Column>}
        </Row>

        <Column fillWidth gap="m">
          <Column gap="8"><Text variant="label-default-s" onBackground="brand-strong">LATEST ON TIKTOK</Text><Heading as="h2" variant="display-strong-m">Latest on TikTok</Heading></Column>
          {video ? <Row fillWidth gap="l" background="neutral-alpha-weak" radius="l" padding="l" s={{ direction: "column", gap: "m" }}>
            <Column flex={1} aspectRatio="16/9" radius="m" overflow="hidden" background="page"><Media src={video.coverImageUrl ?? person.avatar} alt={video.description ?? "Latest DrakeShi TikTok"} fill sizes="(max-width: 768px) 100vw, 45vw" /></Column>
            <Column flex={1} gap="m" vertical="center"><Text variant="body-default-l">{video.description ?? "Latest DrakeShi video"}</Text><Text onBackground="neutral-weak">{[video.viewCount !== undefined && `${video.viewCount.toLocaleString()} views`, video.likeCount !== undefined && `${video.likeCount.toLocaleString()} likes`, video.commentCount !== undefined && `${video.commentCount.toLocaleString()} comments`].filter(Boolean).join(" • ")}</Text><Button href={video.shareUrl ?? tiktokUrl} variant="primary" arrowIcon>Watch on TikTok</Button></Column>
          </Row> : <Column fillWidth gap="m" background="neutral-alpha-weak" radius="l" padding="l"><Text variant="body-default-l" onBackground="neutral-weak">Follow @sheluvsdrak3 on TikTok for the latest videos.</Text><Button href={tiktokUrl} variant="primary" arrowIcon>Open TikTok</Button></Column>}
        </Column>

        <Column fillWidth gap="m"><Line /><Text variant="label-default-s" onBackground="brand-strong">FEATURED CONTENT</Text><Heading as="h2" variant="display-strong-m">DrakeShi on TikTok</Heading><Text variant="body-default-l" onBackground="neutral-weak">A look at DrakeShi's short-form content and creator presence on TikTok.</Text><Row><Button href={tiktokUrl} variant="secondary" arrowIcon>View on TikTok</Button></Row></Column>

        <Row fillWidth horizontal="between" vertical="center" paddingY="m" s={{ direction: "column", align: "start", gap: "m" }}><Text variant="body-default-s" onBackground="neutral-weak">DrakeShi🍃 · @sheluvsdrak3</Text><Row gap="8" wrap>{social.filter((item) => ["TikTok", "YouTube", "Instagram"].includes(item.name)).map((item) => item.link && <Button key={item.name} href={item.link} variant="tertiary" size="s">{item.name}</Button>)}</Row></Row>
      </Column>
    </Column>
  );
}

export const revalidate = 300;

export const metadata = { title: home.title, description: home.description };
