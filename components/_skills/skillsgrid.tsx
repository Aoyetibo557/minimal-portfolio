import Skill from "./skill";
type Props = {
  skills: Skill[];
  theme: string;
};

interface Skill {
  title: string;
  image?: string;
}

const SkillsGrid = ({ skills, theme }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {skills?.map((skill, index) => (
        <Skill
          key={index}
          title={skill.title}
          image={skill.image}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default SkillsGrid;
