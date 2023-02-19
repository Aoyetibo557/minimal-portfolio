import Image from "next/image";

type Props = {
  title: string | JSX.Element;
  image?: string;
};

const Skill = (props: Props) => {
  return (
    <div>
      {props.image && (
        <Image
          src={props.image}
          alt="logo"
          width={90}
          height={90}
          className="border-neutral-900 bg-gray-300 border-2 rounded-full p-2"
        />
      )}
      <div>{props.title}</div>
    </div>
  );
};

export default Skill;
