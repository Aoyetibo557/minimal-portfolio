import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/components/Layout/constexts/themeconstext";
import SkillsGrid from "../_skills/skillsgrid";
import { skillsarray } from "@/const/skills";
import Image from "next/image";
import SocialBox from "../_social/socialbox";
import { socialLinks } from "@/const/social";
import useKonamiCode from "../Utility/_konami/util";
import { useRouter } from "next/router";

export const AboutInfo = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const [secretUnlocked, setSecretUnlocked] = useState(false);

  useKonamiCode(() => {
    setSecretUnlocked(true);
  });

  // use a useEffect to reroute to a secret page
  useEffect(() => {
    if (secretUnlocked) {
      router.push(
        `/secret?key=${process.env.NEXT_PUBLIC_MY_SECRET_KEY}&unlocked=${secretUnlocked}`
      );
    }
  }, [secretUnlocked, router]);

  return (
    <div className="flex flex-col p-4 justify-evenly gap-5 ">
      <div
        className={`flex flex-row space-x-10 justify-evenly about-info  ${
          theme === "light" ? "bg-minimal-white" : "bg-minimal-black"
        }`}>
        <div
          className={`w-2/4 flex flex-col space-y-10 about-headline  ${
            theme === "light" ? "bg-minimal-white" : "bg-minimal-black"
          }`}>
          <div
            className={`mukta-font text-2xl font-semibold ${
              theme === "light" ? "text-neutral-900" : "text-neutral-200"
            }`}>
            <span className={`text-5xl`}>👋🏽</span> Hi, I'm{" "}
            <span className="gloock-font text-blue-300 text-3xl font-bold">
              Anuoluwapo Oyetibo
            </span>{" "}
            it's pronounced{" "}
            <span className="gloock-font text-alt-pink text-1xl hover:shadow-lg  hover:rounded-md ">
              "ha-nu-o-lu-wa-puh".
            </span>{" "}
            I love to build things for the web.
          </div>

          <div
            title="Information About me"
            arai-label="Information About me"
            className={` mukta-font text-lg font-light ${
              theme === "light" ? "text-neutral-900" : "text-neutral-400"
            }`}>
            I've loved building things for as long as I can remember. My passion
            for building things has led me to a career in software engineering.
            My most recent role was as a Frontend developer at{" "}
            <span
              className={` ${
                theme === "light" ? "text-neutral-800" : "text-minimal-white"
              } mukta-font text-lg font-semibold `}>
              <a
                href="https://www.golinks.io/"
                target="_blank"
                rel="noreferrer">
                GoLinks (YC W19)
              </a>
            </span>{" "}
            where I worked on multiple projects using Typescript, React,
            Next.js, Node.js, and GraphQL, AWS and more. I'm currently looking
            for a new role where I can continue to grow and learn.
          </div>
        </div>

        <div>
          <Image
            title="Ai Generated Image "
            arai-label="Ai Generated Image "
            src="/static/images/aboutImage.JPG"
            width={400}
            height={400}
            alt={""}
            className="rounded-lg rotate-3 about-image"
          />
        </div>
      </div>

      <div className="flex flex-row gap-16 space-x-5 about-bottom">
        <div
          className={`w-2/4 mb-4 ml-12 text-lg font-light mukta-font about-skills-container ${
            theme === "light" ? "text-neutral-900" : "text-neutral-100"
          }
        `}>
          Here are a few technologies I've been working with recently:
          <div className="mt-10">
            <SkillsGrid skills={skillsarray} theme={theme} />
          </div>
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
