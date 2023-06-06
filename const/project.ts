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
    title: "Github Repo Finder",
    description:
      "A web app that allows users to search for github repositories and view the details of the repository using the Github API.",
    image: "/static/images/git.png",
    link: "https://golinkhack-anu.vercel.app/",
    github: "https://github.com/Aoyetibo557/golinkhack-anu",
    tech: ["NextJs", "ReactJS", "TailwindCSS", "Github API"],
  },
  {
    title: "CryptoIO",
    description:
      "A web app that displays the current price and other relevant information of cryptocurrencies.",
    image: "/static/images/cryptoio.png",
    link: "https://cryptoio.vercel.app/",
    github: "https://github.com/Aoyetibo557/cryptoio",
    tech: ["NextJs", "TypeScript", "TailwindCSS", "CoinGecko API"],
  },
  {
    title: "Tassker App",
    description:
      "Task Management Platform that allows users to create, update and delete tasks.",
    image: "/static/images/taskimage.png",
    link: "https://task-manager-client-nu.vercel.app",
    github: "https://github.com/Aoyetibo557/task-manager-client",
    tech: ["NextJs", "TypeScript", "TailwindCSS", "Firebase"],
  },
  {
    title: "Advice Generator",
    description:
      "A simple advice generator that uses an API to generate random advice.",
    image: "/static/images/generator.png",
    link: "https://advice-gen-jezw2njji-aoyetibo557.vercel.app/",
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
