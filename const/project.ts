interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  github: string;
  tech?: string[];
}

export const projects: Project[] = [
  {
    title: "Advice Generator",
    description:
      "A simple advice generator that uses an API to generate random advice.",
    image: "/static/images/generator.png",
    link: "https://advice-generator.vercel.app/",
    github: "https://github.com/Aoyetibo557/Advice-Generator-FrontendMentor-",
    tech: ["React", "CSS", "JAVASCRIPT"],
  },
  {
    title: "Hulu Clone App",
    description:
      "A simple hulu clone app that uses the TIDB API to generate random movies.",
    image: "/static/images/clone.png",
    link: "https://hulu-clone-304e7.web.app/",
    github: "https://github.com/Aoyetibo557/Hulu_Clone",
    tech: ["React", "CSS", "JAVASCRIPT"],
  },
  {
    title: "Rock Paper Scissors",
    description:
      "A simple rock paper scissors game that uses the DOM to generate random moves.",
    image: "/static/images/rock.png",
    link: "",
    github: "https://github.com/Aoyetibo557/Rock-Paper-Scissors",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
  },
];
