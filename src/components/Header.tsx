"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button, Column, Row, Text } from "@once-ui-system/core";
import { routes } from "@/resources";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Row
      as="header"
      className={styles.position}
      position="sticky"
      zIndex={9}
      fillWidth
      padding="8"
      horizontal="center"
      s={{
        position: "fixed",
      }}
    >
      <Column
        maxWidth="l"
        fillWidth
        background="page"
        border="neutral-alpha-weak"
        radius="full"
        shadow="l"
        style={{
          position: "relative",
        }}
      >
        <Row
          fillWidth
          paddingX="12"
          paddingY="8"
          horizontal="between"
          vertical="center"
        >
          <Text variant="heading-strong-m">
            DrakeShi🍃
          </Text>

          {/* DESKTOP NAV */}
          <Row
            gap="4"
            vertical="center"
            s={{
              hide: true,
            }}
          >
            {routes["/"] && (
              <Button
                href="/"
                variant={
                  pathname === "/" ? "primary" : "tertiary"
                }
                size="s"
              >
                Home
              </Button>
            )}

            {routes["/about"] && (
              <Button
                href="/about"
                variant={
                  pathname === "/about"
                    ? "primary"
                    : "tertiary"
                }
                size="s"
              >
                About
              </Button>
            )}

            {routes["/work"] && (
              <Button
                href="/work"
                variant={
                  pathname.startsWith("/work")
                    ? "primary"
                    : "tertiary"
                }
                size="s"
              >
                Featured
              </Button>
            )}

            {routes["/gallery"] && (
              <Button
                href="/gallery"
                variant={
                  pathname.startsWith("/gallery")
                    ? "primary"
                    : "tertiary"
                }
                size="s"
              >
                Gallery
              </Button>
            )}

            <Button
              href="https://www.tiktok.com/@sheluvsdrak3"
              variant="secondary"
              size="s"
            >
              TikTok
            </Button>
          </Row>

          {/* MOBILE MENU BUTTON */}
          <Row
            s={{
              hide: false,
            }}
            style={{
              display: "none",
            }}
          >
            <button
              type="button"
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className={styles.menuButton}
            >
              <span />
              <span />
              <span />
            </button>
          </Row>
        </Row>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <Column
            fillWidth
            gap="4"
            paddingX="12"
            paddingY="8"
            style={{
              borderTop:
                "1px solid var(--neutral-alpha-weak)",
            }}
          >
            {routes["/"] && (
              <Button
                href="/"
                variant={
                  pathname === "/" ? "primary" : "tertiary"
                }
                fillWidth
                onClick={closeMenu}
              >
                Home
              </Button>
            )}

            {routes["/about"] && (
              <Button
                href="/about"
                variant={
                  pathname === "/about"
                    ? "primary"
                    : "tertiary"
                }
                fillWidth
                onClick={closeMenu}
              >
                About
              </Button>
            )}

            {routes["/work"] && (
              <Button
                href="/work"
                variant={
                  pathname.startsWith("/work")
                    ? "primary"
                    : "tertiary"
                }
                fillWidth
                onClick={closeMenu}
              >
                Featured
              </Button>
            )}

            {routes["/gallery"] && (
              <Button
                href="/gallery"
                variant={
                  pathname.startsWith("/gallery")
                    ? "primary"
                    : "tertiary"
                }
                fillWidth
                onClick={closeMenu}
              >
                Gallery
              </Button>
            )}

            <Button
              href="https://www.tiktok.com/@sheluvsdrak3"
              variant="secondary"
              fillWidth
              onClick={closeMenu}
            >
              TikTok
            </Button>
          </Column>
        )}
      </Column>
    </Row>
  );
};

export default Header;
