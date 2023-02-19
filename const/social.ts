interface SocialLink {
  href: string;
  icon?: React.ReactNode;
  text: string;
  hasBar?: boolean;
}
export const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/anuoluwapo-oyetibo",
    icon: "linkedin",
    text: "Follow me on LinkedIn",
  },
  {
    href: "https://www.github.com/aoyetibo557",
    icon: "github",
    text: "Follow me on Github",
  },
  {
    href: "https://www.twitter.com/aoyetibo557",
    icon: "twitter",
    text: "Follow me on Twitter",
  },
  {
    href: "https://www.instagram.com/aoyetibo557",
    icon: "instagram",
    text: "Follow me on Instagram",
  },
  {
    href: "aoyetibo@gmail.com",
    icon: "email",
    text: "aoyetibo@gmail.com",
    hasBar: true,
  },
];
