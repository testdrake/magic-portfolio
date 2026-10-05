"use client";

import {
  Column,
  Heading,
  Row,
  Text,
} from "@once-ui-system/core";
import {
  useEffect,
  useRef,
  useState,
} from "react";

type TikTokData = {
  available: boolean;
  followers?: number;
  following?: number;
  likes?: number;
  videos?: number;
};

type AnimatedNumberProps = {
  value?: number;
  duration?: number;
};

function AnimatedNumber({
  value,
  duration = 900,
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(value ?? 0);
  const previousValue = useRef(value ?? 0);

  useEffect(() => {
    if (value === undefined) return;

    const startValue = previousValue.current;
    const endValue = value;

    if (startValue === endValue) {
      setDisplayValue(endValue);
      return;
    }

    const startTime = performance.now();
    let animationFrame: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue = Math.round(
        startValue +
          (endValue - startValue) * easedProgress,
      );

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        previousValue.current = endValue;
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [value, duration]);

  if (value === undefined) {
    return <>—</>;
  }

  return <>{displayValue.toLocaleString()}</>;
}

type StatCardProps = {
  label: string;
  value?: number;
  delay: string;
};

function StatCard({
  label,
  value,
  delay,
}: StatCardProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
    }, Number.parseInt(delay));

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Column
      flex={1}
      gap="4"
      style={{
        opacity: active ? 1 : 0,
        transform: active
          ? "translateY(0)"
          : "translateY(16px)",
        transition:
          "opacity 700ms ease, transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <Text
        variant="label-default-s"
        onBackground="neutral-weak"
      >
        {label}
      </Text>

      <Text variant="display-strong-m">
        <AnimatedNumber value={value} />
      </Text>
    </Column>
  );
}

export default function TikTokStats() {
  const [stats, setStats] = useState<TikTokData | null>(
    null,
  );
  const [isRefreshing, setIsRefreshing] =
    useState(false);

  async function loadStats() {
    try {
      setIsRefreshing(true);

      const response = await fetch("/api/tiktok", {
        cache: "no-store",
      });

      if (!response.ok) return;

      const data = (await response.json()) as TikTokData;

      setStats(data);
    } catch {
      // Keep the existing values if the request fails.
    } finally {
      setTimeout(() => {
        setIsRefreshing(false);
      }, 700);
    }
  }

  useEffect(() => {
    loadStats();

    const interval = setInterval(loadStats, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Column
      fillWidth
      gap="m"
      style={{
        position: "relative",
      }}
    >
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

        <Row
          gap="8"
          vertical="center"
          style={{
            opacity: stats?.available ? 1 : 0.5,
            transition: "opacity 400ms ease",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#00BBFF",
              boxShadow:
                "0 0 12px rgba(0, 187, 255, 0.8)",
              animation:
                "tiktokPulse 1.8s ease-in-out infinite",
            }}
          />

          <Text
            variant="body-default-s"
            onBackground="neutral-weak"
          >
            Live from TikTok
          </Text>
        </Row>
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
        style={{
          position: "relative",
          overflow: "hidden",
          transition:
            "border-color 400ms ease, box-shadow 400ms ease",
          boxShadow: isRefreshing
            ? "0 0 35px rgba(0, 187, 255, 0.12)"
            : "0 0 0 rgba(0, 0, 0, 0)",
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

        <StatCard
          label="FOLLOWERS"
          value={stats?.followers}
          delay="0"
        />

        <StatCard
          label="LIKES"
          value={stats?.likes}
          delay="100"
        />

        <StatCard
          label="FOLLOWING"
          value={stats?.following}
          delay="200"
        />

        <StatCard
          label="VIDEOS"
          value={stats?.videos}
          delay="300"
        />
      </Row>

      <style jsx>{`
        @keyframes tiktokPulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }

          50% {
            opacity: 0.45;
            transform: scale(0.72);
          }
        }
      `}</style>
    </Column>
  );
}
