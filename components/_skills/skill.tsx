import Image from "next/image";

type Props = {
  title: string | JSX.Element;
  image?: string;
  theme: string;
};

const Skill = (props: Props) => {
  return (
    <div
      className={`font-light mukta-font w-full flex flex-row items-center space-x-2 p-1 ${
        props.theme === "light" ? "text-neutral-700" : "text-neutral-300"
      }`}>
      {props.image && (
        <Image
          src={props.image}
          alt="logo"
          width={40}
          height={40}
          className="p-1"
        />
      )}
      <div>{props.title}</div>
    </div>
  );
};

export default Skill;
