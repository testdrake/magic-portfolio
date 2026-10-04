"use client";
import { usePathname } from "next/navigation";
import { Button, Row, Text } from "@once-ui-system/core";
import { routes } from "@/resources";
import styles from "./Header.module.scss";

export const Header = () => { const pathname = usePathname() ?? ""; return <Row as="header" className={styles.position} position="sticky" zIndex={9} fillWidth padding="8" horizontal="center" s={{ position: "fixed" }}><Row maxWidth="l" fillWidth background="page" border="neutral-alpha-weak" radius="full" paddingX="12" paddingY="8" horizontal="between" vertical="center" shadow="l"><Text variant="heading-strong-m">DrakeShi🍃</Text><Row gap="4" vertical="center" s={{ hide: true }}>{routes["/"] && <Button href="/" variant={pathname === "/" ? "primary" : "tertiary"} size="s">Home</Button>}{routes["/about"] && <Button href="/about" variant={pathname === "/about" ? "primary" : "tertiary"} size="s">About</Button>}{routes["/work"] && <Button href="/work" variant={pathname.startsWith("/work") ? "primary" : "tertiary"} size="s">Featured</Button>}{routes["/gallery"] && <Button href="/gallery" variant={pathname.startsWith("/gallery") ? "primary" : "tertiary"} size="s">Gallery</Button>}<Button href="https://www.tiktok.com/@sheluvsdrak3" variant="secondary" size="s">TikTok</Button></Row><Row gap="4" s={{ hide: false }}><Button href="https://www.tiktok.com/@sheluvsdrak3" variant="primary" size="s">TikTok</Button></Row></Row></Row>; };
export default Header;
