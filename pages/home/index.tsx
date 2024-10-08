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
    <div className="flex flex-col gap-10 pl-20 p-5 homepage">
      <div className="flex flex-col gap-5 w-3/4 responsive-home">
        <span
          title="Anuoluwapo Oyetibo"
          arai-label="Anuoluwapo Oyetibo (Introduction)"
          className={`homepage-h2 text-5xl font-bold mukta-font
          ${theme === "light" ? "text-neutral-900" : "text-neutral-200"}
        `}>
          Fullstack Developer, Tech Enthusiast, Musician, Photographer and
          amateur Gamer.
        </span>

        <span
          title="Anuoluwapo Oyetibo"
          arai-label="Anuoluwapo Oyetibo (Introduction)"
          className={`homepage-h3 text-lg font-light mukta-font
          ${theme === "light" ? "text-neutral-700" : "text-neutral-400"}
        
        `}>
          {
            "Hello, I'm Anuoluwapo, an experienced full-stack developer passionate about crafting beautiful and functional web applications. Outside of coding, I'm also a musician (piano and guitar), photographer, and amateur gamer. With a diverse skill set and a drive for creativity, I excel at delivering innovative solutions and impactful experiences in the digital realm."
          }
        </span>

        <div className="flex flex-row gap-8 mt-3">
          <a
            title="Twitter"
            arai-label="Twitter"
            className={`
            ${
              theme === "light"
                ? "text-neutral-500 hover:text-neutral-800"
                : "text-neutral-400 hover:text-neutral-600"
            }
          `}
            href="https://www.twitter.com">
            <BsTwitter className="w-4 h-4 " />
          </a>

          <a
            title="Instagram"
            arai-label="Instagram"
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
            title="Github"
            arai-label="Github"
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
            title="LinkedIn"
            arai-label="LinkedIn"
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

      {/* <div className="grid grid-cols-4 gap-5 mt-4 homepage-image-container">
        <Image
          src={"/static/images/imageFour.jpg"}
          alt="logo"
          width={300}
          height={300}
          className="rounded-md rotate-3 homepage-image"
        />

        <Image
          src={"/static/images/imageNine.JPG"}
          alt="logo"
          width={300}
          height={300}
          className="rounded-md rotate-0 homepage-image"
        />

        <Image
          src={"/static/images/imageThree.JPG"}
          alt="logo"
          width={200}
          height={200}
          className="rounded-md rotate-6 homepage-image"
        />

        <Image
          src={"/static/images/imageFive.jpg"}
          alt="logo"
          width={200}
          height={200}
          className="rounded-md homepage-image "
        />
      </div> */}

      <div className="flex flex-row gap-10 justify-between homepage-bottom">
        <div
          title="Comments"
          arai-label="Comments"
          className="w-3/4 homepage-comments">
          <CommentList comments={commentlist} theme={theme} />
        </div>
        <div
          title="Contact"
          arai-label="Contact"
          className="flex flex-col gap-10">
          <ContactBox theme={theme} />
          <WorkBox theme={theme} worklist={workhistory} />
        </div>
      </div>
    </div>
  );
};

export default Home;
