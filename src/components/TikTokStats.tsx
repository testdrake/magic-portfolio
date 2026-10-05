"use client";

import { Column, Heading, Row, Text } from "@once-ui-system/core";
import { useEffect, useState } from "react";

type TikTokData = {
  available: boolean;
  followers?: number;
  following?: number;
  likes?: number;
  videos?: number;
};

export default function TikTokStats() {
  const [stats, setStats] = useState<TikTokData | null>(null);

  async function loadStats() {
    try {
      const response = await fetch("/api/tiktok", {
        cache: "no-store",
      });

      if (!response.ok) return;

      const data = (await response.json()) as TikTokData;

      setStats(data);
    } catch {
      // Keep existing stats if the request fails.
    }
  }

  useEffect(() => {
    loadStats();

    const interval = setInterval(loadStats, 30000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (value?: number) => {
    if (value === undefined) return "—";

    return value.toLocaleString();
  };

  return (
    <Column fillWidth gap="m">
      <Row
        fillWidth
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          align: "start",
          gap: "s",
        }}
      >
        <Column gap="4">
          <Text
            variant="label-default-s"
            onBackground="brand-strong"
          >
            TIKTOK
          </Text>

          <Heading
            as="h2"
            variant="display-strong-m"
            wrap="balance"
          >
            Live stats
          </Heading>
        </Column>

        <Text
          variant="body-default-s"
          onBackground="neutral-weak"
        >
          ● Live from TikTok
        </Text>
      </Row>

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
      >
        <Column flex={1} gap="4">
          <Text
            variant="label-default-s"
            onBackground="neutral-weak"
          >
            FOLLOWERS
          </Text>

          <Text variant="display-strong-m">
            {formatNumber(stats?.followers)}
          </Text>
        </Column>

        <Column flex={1} gap="4">
          <Text
            variant="label-default-s"
            onBackground="neutral-weak"
          >
            LIKES
          </Text>

          <Text variant="display-strong-m">
            {formatNumber(stats?.likes)}
          </Text>
        </Column>

        <Column flex={1} gap="4">
          <Text
            variant="label-default-s"
            onBackground="neutral-weak"
          >
            FOLLOWING
          </Text>

          <Text variant="display-strong-m">
            {formatNumber(stats?.following)}
          </Text>
        </Column>

        <Column flex={1} gap="4">
          <Text
            variant="label-default-s"
            onBackground="neutral-weak"
          >
            VIDEOS
          </Text>

          <Text variant="display-strong-m">
            {formatNumber(stats?.videos)}
          </Text>
        </Column>
      </Row>
    </Column>
  );
}
