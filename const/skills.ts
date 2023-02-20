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
};

interface Skills {
  title: string;
  image?: string;
}

export const skillsarray: Skills[] = [
  {
    title: Skills.TYPESCRIPT,
    image: "/images/typescript.png",
  },
  {
    title: Skills.REACT,
    image: "/images/atom.png",
  },
  {
    title: Skills.NEXTJS,
    image: "/images/next.svg",
  },
  {
    title: Skills.NODEJS,
    image: "/images/nodejs.png",
  },
  {
    title: Skills.GRAPHQL,
    image: "/images/graphql.png",
  },
  {
    title: Skills.TAILWINDCSS,
    image: "/images/tailwind.png",
  },
  {
    title: Skills.MYSQL,
    image: "/images/datamodelling.png",
  },
  {
    title: Skills.JAVASCRIPT,
    image: "/images/java-script.png",
  },

  {
    title: Skills.GIT,
    image: "/images/gitlab.png",
  },
];
