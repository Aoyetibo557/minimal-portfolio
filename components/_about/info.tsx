import { useContext, useState } from "react";
import { ThemeContext } from "@/components/Layout/constexts/themeconstext";
import SkillsGrid from "../_skills/skillsgrid";
import { skillsarray } from "@/const/skills";

export const AboutInfo = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col p-4">
      <div
        className={`flex flex-col space-y-10  ${
          theme === "light" ? "bg-minimal-white" : "bg-minimal-black"
        }`}>
        <div
          className={`text-3xl font-bold ${
            theme === "light" ? "text-neutral-900" : "text-neutral-100"
          }`}>
          Hi, I'm <span className="text-red-500">Anuoluwapo Oyetibo</span> it's
          pronounced{" "}
          <span className="text-red-500">Anu-olu-wa-po O-yet-i-bo</span> I live
          in NYC and I love to build things for the web.
        </div>

        <div
          className={` text-sm font-light ${
            theme === "light" ? "text-neutral-900" : "text-neutral-100"
          }`}>
          I've loved building things for as long as I can remember. My passion
          for building things has led me to a career in software engineering. My
          most recent role was as a Full stack Developer Associate at
          <span className="text-red-500">CertiK</span> where I worked on
          multiple projects using Typescript, React, Next.js, Node.js, and
          GraphQL, AWS and more. I'm currently looking for a new role where I
          can continue to grow and learn.
        </div>

        <div
          className={`text-sm font-light
          ${theme === "light" ? "text-neutral-900" : "text-neutral-100"}
        `}>
          Here are a few technologies I've been working with recently:
          <div>
            <SkillsGrid skills={skillsarray} />
          </div>
        </div>
      </div>
    </div>
  );
};
