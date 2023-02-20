import { ThemeContext } from "@/components/Layout/constexts/themeconstext";
import { useContext } from "react";
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import { WorkBox } from "@/components/_work/workbox";
import { workhistory } from "@/const/work";
import { ContactBox } from "@/components/_contact/contactbox";

import { CommentList } from "@/components/_comments/commentlist";
import { commentlist } from "@/const/comment";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex flex-col gap-10 pl-20 p-5">
      <div className="flex flex-col gap-5 w-3/4">
        <span
          className={`text-5xl font-bold mukta-font
          ${theme === "light" ? "text-neutral-900" : "text-neutral-200"}
        `}>
          Fullstack Developer, Tech Enthusiast, Musician, Photographer and
          amateur Gamer.
        </span>

        <span
          className={`text-lg font-light mukta-font
          ${theme === "light" ? "text-neutral-700" : "text-neutral-400"}
        
        `}>
          {
            "I'm Anuoluwapo, asoftware developer based in New York City. I'm currently looking for new opportunities. I'm a fullstack developer with a passion for building beautiful and functional web applications. I'm also a musician; piano and guitar, photographer and amateur gamer."
          }
        </span>

        <div className="flex flex-row gap-8 mt-3">
          <a
            className={`
            ${
              theme === "light"
                ? "text-neutral-500 hover:text-neutral-800"
                : "text-neutral-400 hover:text-neutral-600"
            }
          `}
            href="https://www.twitter.com">
            <BsTwitter className="w-4 h-4" />
          </a>

          <a
            className={`
            ${
              theme === "light"
                ? "text-neutral-500 hover:text-neutral-800"
                : "text-neutral-400 hover:text-neutral-600"
            }
          `}
            href="https://www.instagram.com/gahbby557">
            <BsInstagram className="w-4 h-4" />
          </a>

          <a
            className={`
            ${
              theme === "light"
                ? "text-neutral-500 hover:text-neutral-800"
                : "text-neutral-400 hover:text-neutral-600"
            }
          `}
            href="https://www.github.com/aoyetibo557">
            <BsGithub className="w-4 h-4" />
          </a>

          <a
            className={`
            ${
              theme === "light"
                ? "text-neutral-500 hover:text-neutral-800"
                : "text-neutral-400 hover:text-neutral-600"
            }
          `}
            href="https://www.linkedin.com/in/anuoluwapo-oyetibo">
            <BsLinkedin className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 mt-4">
        <Image
          src="/static/images/imageFour.jpg"
          alt="logo"
          width={300}
          height={300}
          className="rounded-md rotate-3"
        />

        <Image
          src="/static/images/imageNine.JPG"
          alt="logo"
          width={300}
          height={300}
          className="rounded-md rotate-0"
        />

        <Image
          src="/static/images/imageThree.JPG"
          alt="logo"
          width={200}
          height={200}
          className="rounded-md rotate-6"
        />

        <Image
          src="/static/images/imageFive.jpg"
          alt="logo"
          width={200}
          height={200}
          className="rounded-md "
        />
      </div>

      <div className="flex flex-row gap-10 justify-between">
        <div className="w-3/4">
          <CommentList comments={commentlist} theme={theme} />
        </div>
        <div className="flex flex-col gap-10">
          <ContactBox theme={theme} />
          <WorkBox theme={theme} worklist={workhistory} />
        </div>
      </div>
    </div>
  );
};

export default Home;
