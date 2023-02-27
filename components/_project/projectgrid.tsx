import { ProjectCard } from "./projectcard";

type Props = {
  projects: ProjectCard[];
  theme: string;
};

interface ProjectCard {
  title: string;
  description: string;
  image: string;
  link?: string;
  github: string;
  tech?: string[];
}

const ProjectGrid = ({ projects, theme }: Props) => {
  return (
    <div className="projectgrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
          github={project.github}
          tech={project.tech}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
