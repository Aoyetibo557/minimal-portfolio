import { useContext, useState } from "react";
import { ThemeContext } from "@/components/Layout/constexts/themeconstext";
import SkillsGrid from "../_skills/skillsgrid";
import { skillsarray } from "@/const/skills";
import Image from "next/image";
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import SocialBox from "../_social/socialbox";
import { socialLinks } from "@/const/social";

export const AboutInfo = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-row p-4 justify-evenly gap-10">
      <div
        className={`w-2/4 flex flex-col space-y-10  ${
          theme === "light" ? "bg-minimal-white" : "bg-minimal-black"
        }`}>
        <div
          className={`mukta-font text-2xl font-semibold ${
            theme === "light" ? "text-neutral-900" : "text-neutral-200"
          }`}>
          <span className={`text-5xl`}>👋🏽</span> Hi, I'm{" "}
          <span className="gloock-font text-alt-blue text-3xl font-bold">
            Anuoluwapo Oyetibo
          </span>{" "}
          it's pronounced{" "}
          <span className="gloock-font text-alt-pink text-1xl hover:shadow-lg  hover:rounded-md ">
            "ha-nu-o-lu-wa-puh".
          </span>{" "}
          I live in NYC and I love to build things for the web.
        </div>

        <div
          className={` mukta-font text-lg font-light ${
            theme === "light" ? "text-neutral-900" : "text-neutral-400"
          }`}>
          I've loved building things for as long as I can remember. My passion
          for building things has led me to a career in software engineering. My
          most recent role was as a Full stack Developer Associate at{" "}
          <span
            className={` ${
              theme === "light" ? "text-neutral-800" : "text-minimal-white"
            } mukta-font text-lg font-semibold `}>
            <a href="https://www.certik.com/" target="_blank" rel="noreferrer">
              CertiK
            </a>
          </span>{" "}
          where I worked on multiple projects using Typescript, React, Next.js,
          Node.js, and GraphQL, AWS and more. I'm currently looking for a new
          role where I can continue to grow and learn.
        </div>

        <div
          className={`mb-4 text-lg font-light mukta-font ${
            theme === "light" ? "text-neutral-900" : "text-neutral-100"
          }
        `}>
          Here are a few technologies I've been working with recently:
          <div className="mt-10">
            <SkillsGrid skills={skillsarray} theme={theme} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div>
          <Image
            src="/static/images/aboutImage.JPG"
            width={400}
            height={400}
            alt={""}
            className="rounded-lg rotate-3"
          />
        </div>
        <div>
          <div className="">
            <SocialBox theme={theme} socials={socialLinks} />
          </div>
        </div>
      </div>
    </div>
  );
};
