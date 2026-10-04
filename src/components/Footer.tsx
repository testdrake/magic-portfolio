import { IconButton, Row, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => <Row as="footer" fillWidth padding="8" horizontal="center"><Row className={styles.mobile} maxWidth="l" fillWidth paddingY="8" paddingX="16" gap="16" horizontal="between" vertical="center" s={{ direction: "column", align: "center" }}><Text variant="body-default-s"><Text onBackground="neutral-weak">DrakeShi🍃 / </Text><Text>@sheluvsdrak3</Text></Text><Row gap="16">{social.map((item) => item.link && <IconButton key={item.name} href={item.link} icon={item.icon} tooltip={item.name} size="s" variant="ghost" />)}</Row></Row></Row>;
