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
};

interface Skills {
  title: string;
  image?: string;
}

export const skillsarray: Skills[] = [
  {
    title: Skills.TYPESCRIPT,
    // image: "typescript.png",
  },
  {
    title: Skills.REACT,
    // image: "react.png",
  },
  {
    title: Skills.ANGULAR,
    // image: "angular.png",
  },
  {
    title: Skills.JAVASCRIPT,
    // image: "javascript.png",
  },
  {
    title: Skills.HTML,
    // image: "html.png",
  },
  {
    title: Skills.CSS,
    // image: "css.png",
  },
  {
    title: Skills.SASS,
    // image: "sass.png",
  },
  {
    title: Skills.EXPRESS,
    // image: "graphql.png",
  },
];
