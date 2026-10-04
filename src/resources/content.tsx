import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "DrakeShi🍃",
  lastName: "McMahan",
  name: "DrakeShi🍃",
  role: "Digital Content Creator & Videographer",
  avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar-cpfor0C64t6Asd93wOF8jfdyExd36g.jpg",
  email: "",
  location: "America/Los_Angeles",
  languages: ["English"],
  locale: "en",
};

const newsletter: Newsletter = { display: false, title: <>DrakeShi🍃</>, description: <>Follow along for the latest.</> };

const social: Social = [
  { name: "TikTok", icon: "play", link: "https://www.tiktok.com/@sheluvsdrak3", essential: true },
  { name: "YouTube", icon: "play", link: "https://www.youtube.com/channel/@sheluvsdrak3", essential: true },
  { name: "Instagram", icon: "instagram", link: "https://www.instagram.com/sheluvsdrak3/", essential: true },
  { name: "Google", icon: "globe", link: "https://profile.google.com/@sheluvsdrak3", essential: true },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "DrakeShi🍃 — Digital Content Creator & Videographer",
  description: "DrakeShi🍃 — Drake McMahan, @sheluvsdrak3 on TikTok. Relatable humor, personality, and entertaining short-form content.",
  headline: <>DrakeShi🍃<Text as="span" onBackground="brand-strong">.</Text></>,
  featured: { display: true, title: <Row gap="12" vertical="center"><strong>Featured Content</strong><Line background="brand-alpha-strong" vert height="20" /><Text onBackground="brand-medium">Watch the latest</Text></Row>, href: "/work" },
  subline: <>Digital Content Creator & Videographer</>,
};

const about: About = {
  path: "/about",
  label: "About",
  title: "About DrakeShi🍃",
  description: "Meet Drake McMahan, the creator behind DrakeShi🍃 and @sheluvsdrak3.",
  tableOfContent: { display: false, subItems: false },
  avatar: { display: true },
  calendar: { display: false, link: "" },
  intro: {
    display: true,
    title: "The creator",
    description: <>DrakeShi🍃 is the online creator identity of Drake McMahan. His content is rooted in relatable moments, situational comedy, humor, personality, and lifestyle media made for the short-form feed.</>,
  },
  work: { display: false, title: "Creator Journey", experiences: [] },
  studies: { display: false, title: "Studies", institutions: [] },
  technical: { display: false, title: "Skills", skills: [] },
};

const blog: Blog = { path: "/blog", label: "Blog", title: "DrakeShi🍃", description: "The latest from DrakeShi🍃." };

const work: Work = {
  path: "/work",
  label: "Featured",
  title: "Featured Content",
  description: "Featured short-form content and creator media from DrakeShi🍃.",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Gallery — DrakeShi🍃",
  description: "A visual gallery from DrakeShi🍃, digital content creator and videographer.",
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "DrakeShi🍃 creator gallery image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-4.jpg", alt: "DrakeShi🍃 creator gallery portrait", orientation: "vertical" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "DrakeShi🍃 creator gallery image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "DrakeShi🍃 creator gallery portrait", orientation: "vertical" },
    { src: "/images/gallery/vertical-2.jpg", alt: "DrakeShi🍃 creator gallery portrait", orientation: "vertical" },
    { src: "/images/gallery/horizontal-2.jpg", alt: "DrakeShi🍃 creator gallery image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-4.jpg", alt: "DrakeShi🍃 creator gallery image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-3.jpg", alt: "DrakeShi🍃 creator gallery portrait", orientation: "vertical" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
