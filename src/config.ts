import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://kavicsmedia.hu/",
  author: "KAVICS",
  desc: "Független dokumentarista csatorna televíziós riporterektől. Társadalmi riportok, vidékjárás, tényfeltárás — kommentár és szenzáció nélkül.",
  title: "KAVICS",
  ogImage: "kavics-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "hu", // html lang code. Set this empty and default will be "en"
  langTag: ["hu-HU"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 123,
  height: 40,
};

export const SOCIALS: SocialObjects = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@kavicsmedia",
    linkTitle: `${SITE.title} a YouTube-on`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kavics_media/",
    linkTitle: `${SITE.title} az Instagramon`,
    active: true,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@kavics_media",
    linkTitle: `${SITE.title} a TikTokon`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:info@kavicsmedia.hu",
    linkTitle: `Írj nekünk: info@kavicsmedia.hu`,
    active: true,
  },
];
