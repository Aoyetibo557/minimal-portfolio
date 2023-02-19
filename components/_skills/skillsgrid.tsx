import Skill from "./skill";
type Props = {
  skills: Skill[];
};

interface Skill {
  title: string;
  image?: string;
}

const SkillsGrid = ({ skills }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {skills?.map((skill, index) => (
        <Skill key={index} title={skill.title} image={skill.image} />
      ))}
    </div>
  );
};

export default SkillsGrid;
