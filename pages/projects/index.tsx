import { ThemeContext } from "@/components/Layout/constexts/themeconstext";
import ProjectGrid from "@/components/_project/projectgrid";
import { projects } from "@/const/project";
import { useContext } from "react";

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="mt-5 pl-20 p-4 h-full">
      <div>
        <div
          className={`w-3/4 font-extrabold text-4xl 
          ${theme === "light" ? "text-neutral-900" : "text-neutral-100"}
        `}>
          Things i've made while playing around with code and stuff, trying to
          be a better developer.
        </div>

        <div
          className={`mukta-font mt-5 w-3/4 font-light text-lg
          ${theme === "light" ? "text-neutral-900" : "text-neutral-400"}
        `}>
          I've worked on tons of projects over the years but these are the ones
          that I'm most proud of. If you see something that piques your
          interest, feel free to click on it and play around. The code and live
          link is also available on my Github, check out the code and please
          reach out if you have any ideas for how it can be improved.
        </div>
      </div>

      <div className="p-5">
        <ProjectGrid projects={projects} theme={theme} />
      </div>
    </div>
  );
};

export default Projects;
