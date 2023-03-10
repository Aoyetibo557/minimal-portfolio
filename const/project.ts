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
    title: "Tassker App",
    description:
      "A full stack app that allows users to create tasks for themselves using a board system. Users can also create boards and add tasks to them. It has a custom API and a firestore database.",
    image: "/static/images/taskimage.png",
    link: "https://task-manager-client-nu.vercel.app/login",
    github: "https://github.com/Aoyetibo557/task-manager-client",
    tech: ["NextJs", "TypeScript", "TailwindCSS", "Firebase"],
  },
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
    title: "Thoughts App",
    description:
      "A full stack app that allows users to post their thoughts and read other users thoughts.",
    image: "/static/images/rock.png",
    link: "",
    github: "https://github.com/Aoyetibo557/thoughts-app",
    tech: ["React", "Firebase", "JAVASCRIPT"],
  },

  {
    title: "African Marketplace",
    description: "A web store for an african market/shop.",
    image: "/static/images/shop.png",
    link: "",
    github: "https://github.com/Aoyetibo557/foody-web-app",
    tech: ["React", "CSS", "JAVASCRIPT"],
  },
];
