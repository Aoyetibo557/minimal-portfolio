import Image from "next/image";
import { BsLink45Deg } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { truncateString } from "../Utility/hooks/utils";

type Props = {
  title: string;
  description: string;
  image: string;
  link?: string;
  github: string;
  tech?: string[];
  theme: string;
};

export const ProjectCard = (props: Props) => {
  return (
    <div
      className={`flex p-5 rounded-xl flex-col justify-between h-full border-[1.5px] border-gray-500
      ${
        props.theme === "light"
          ? "hover:bg-light-white"
          : "hover:bg-neutral-800"
      }
    `}>
      <div>
       {props.image && (
         <Image
          src={props.image}
          alt={props.title}
          width={40}
          height={40}
          // className="rounded-full border-[0.5px] border-gray-200"
        />
       )}
      </div>
      <div className="mt-5">
        <div
          className={`mukta-font font-medium text-lg hover:underline ${
            props.theme === "light" ? "text-neutral-700" : "text-neutral-200"
          }`}
          title={props.title}
          aria-label={props.title}>
          <a href={props.link} target="_blank" rel="noreferrer">
            {props.title}
          </a>
        </div>
      </div>
      <div className="mt-5">
        <div
          className={`mukta-font font-light text-base ${
            props.theme === "light" ? "text-neutral-700" : "text-neutral-400"
          }`}
          title={props.description}
          aria-label={props.description}>
          {truncateString(props.description, 75)}
        </div>
      </div>
      <div className="mt-5 flex-wrap flex flex-row gap-2 content-center justify-between">
      
        <a
          href={props.github}
          target="_blank"
          rel="noreferrer"
          className={`block font-medium text-base mukta-font ${
            props.theme === "light"
              ? "text-neutral-500 hover:text-neutral-800"
              : "text-neutral-400 hover:text-neutral-100"
          }`}>
          <BsGithub className={`inline-block mr-2 text-xl`} />
          <span title={props.github} aria-label={props.github}>
            {truncateString(props.github, 30)}
          </span>
        </a>
      </div>
    </div>
  );
};
