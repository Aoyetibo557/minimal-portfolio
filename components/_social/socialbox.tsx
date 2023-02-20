import React from "react";
import { SocialLink } from "./sociallink";

type Props = {
  socials: SocialLink[];
  theme: string;
};

interface SocialLink {
  href: string;
  icon?: React.ReactNode;
  text: string;
  hasBar?: boolean;
}

const SocialBox = ({ socials, theme }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      {socials.map((social, index) => (
        <SocialLink
          key={index}
          href={social.href}
          icon={social.icon}
          text={social.text}
          hasBar={social.hasBar}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default SocialBox;
