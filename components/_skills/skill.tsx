import Image from "next/image";

type Props = {
  title: string | JSX.Element;
  image?: string;
  theme: string;
};

const Skill = (props: Props) => {
  return (
    <div
      className={`w-full flex flex-row items-center space-x-2 p-1 cursor-pointer rounded-sm ${
        props.theme === "light" ? "hover:bg-gray-100" : "hover:bg-neutral-800"
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
      <div
        className={`text-sm ${
          props.theme === "light" ? "text-neutral-500" : "text-minimal-white"
        }}`}>
        {props.title}
      </div>
    </div>
  );
};

export default Skill;
