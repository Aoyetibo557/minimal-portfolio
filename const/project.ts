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
    link: "https://devhub-anu.vercel.app/",
    github: "https://github.com/Aoyetibo557/golinkhack-anu",
    tech: ["NextJs", "ReactJS", "TailwindCSS", "Github API"],
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
    title: "Map Markers",
    description:
      "A web app that allows users to search for locations and view the results on a map. The application is built using Next.js, TypeScript, Tailwind CSS, Redux Toolkit, and Leaflet. ",
    image: "/static/images/map.png",
    link: "https://mapmarkers.vercel.app/",
    github: "https://github.com/Aoyetibo557/Map-Markers",
    tech: ["NextJs", "TypeScript", "TailwindCSS", "Leaflet"],
  },
  {
    title: "AIGOD (Epikavios)",
    description:
      "An interactive AI chatbot gives advice while quoting parables from multiple religions. Built using Chat GPT, React.js, CSS & others ",
    image: "/static/images/aigod_logo.png",
    link: "https://aigod.ai",
    github: "https://github.com/Aoyetibo557/AIGOD",
    tech: ["Chat GPT 3", "ReactJs", "TypeScript", "TailwindCSS"],
  },

  // {
  //   title: "Wanderwith",
  //   description:
  //     "Find travel companions and trips that aligns with your intrest. Sit back relax and let us take care of the planning for you.",
  //   image: "/static/images/wanderwith.png",
  //   link: "https://wanderwith.io",
  //   github: "https://github.com/Aoyetibo557",
  //   tech: ["ReactJs", "React-query", "TailwindCSS"],
  // },

  {
    title: "Tassker App",
    description:
      "Task Management Platform that allows users to create, update and delete tasks. V2 coming soon!",
    image: "/static/images/taskimage.png",
    link: "https://task-manager-client-nu.vercel.app",
    github: "https://github.com/Aoyetibo557/task-manager-client",
    tech: ["NextJs", "TypeScript", "TailwindCSS", "Firebase"],
  },
  // {
  //   title: "CryptoIO",
  //   description:
  //     "A web app that displays the current price and other relevant information of cryptocurrencies.",
  //   image: "/static/images/cryptoio.png",
  //   link: "https://cryptoio.vercel.app/",
  //   github: "https://github.com/Aoyetibo557/cryptoio",
  //   tech: ["NextJs", "TypeScript", "TailwindCSS", "CoinGecko API"],
  // },

  // {
  //   title: "Hulu Clone App",
  //   description:
  //     "A simple hulu clone app that uses the TIDB API to generate random movies.",
  //   image: "/static/images/clone.png",
  //   link: "https://hulu-clone-304e7.web.app/",
  //   github: "https://github.com/Aoyetibo557/Hulu_Clone",
  //   tech: ["React", "CSS", "JAVASCRIPT"],
  // },
  // {
  //   title: "Thoughts App",
  //   description:
  //     "A full stack app that allows users to post their thoughts and read other users thoughts.",
  //   image: "/static/images/rock.png",
  //   link: "",
  //   github: "https://github.com/Aoyetibo557/thoughts-app",
  //   tech: ["React", "Firebase", "JAVASCRIPT"],
  // },

  // {
  //   title: "African Marketplace",
  //   description: "A web store for an african market/shop.",
  //   image: "/static/images/shop.png",
  //   link: "",
  //   github: "https://github.com/Aoyetibo557/foody-web-app",
  //   tech: ["React", "CSS", "JAVASCRIPT"],
  // },
];
