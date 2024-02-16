export const Skills = {
  TYPESCRIPT: "TypeScript",
  REACT: "React",
  ANGULAR: "Angular",
  JAVASCRIPT: "JavaScript",
  HTML: "HTML",
  CSS: "CSS",
  SASS: "SASS",
  GRAPHQL: "GraphQL",
  NODEJS: "NodeJS",
  EXPRESS: "Express",
  MONGODB: "MongoDB",
  MYSQL: "MySQL",
  GIT: "Git",
  JQUERY: "jQuery",
  "C++": "C++",
  JAVA: "Java",
  NEXTJS: "NextJS",
  TAILWINDCSS: "TailwindCSS",
  CHATGPT: "Chat GPT-3",
};

interface Skills {
  title: string;
  image?: string;
}

export const skillsarray: Skills[] = [
  {
    title: Skills.CHATGPT,
    image: "/static/images/chatgpt.png",
  },
  {
    title: Skills.TYPESCRIPT,
    image: "/static/images/typescript.png",
  },
  {
    title: Skills.REACT,
    image: "/static/images/atom.png",
  },
  {
    title: Skills.NEXTJS,
    image: "/static/images/next.svg",
  },
  {
    title: Skills.NODEJS,
    image: "/static/images/nodejs.png",
  },
  {
    title: Skills.GRAPHQL,
    image: "/static/images/graphql.png",
  },
  {
    title: Skills.TAILWINDCSS,
    image: "/static/images/tailwind.png",
  },
  {
    title: Skills.MYSQL,
    image: "/static/images/datamodelling.png",
  },
  {
    title: Skills.JAVASCRIPT,
    image: "/static/images/java-script.png",
  },

  {
    title: Skills.GIT,
    image: "/static/images/gitlab.png",
  },
];
