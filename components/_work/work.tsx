import { StaticImageData } from "next/image";
import Image from "next/image";
import { MdOutlineHomeWork } from "react-icons/md";

type WorkProps = {
  theme?: string;
  image: string | StaticImageData;
  worktitle: string;
  name: string;
  date: string;
  href?: string;
};
export const Work = (props: WorkProps) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-4">
        <Image
          title={props.name}
          arai-label={props.name}
          src={props.image}
          alt="logo"
          width={50}
          height={50}
          className="rounded-full scale-75"
        />

        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col">
          <span
            title={props.name}
            arai-label={props.name}
            className={`font-bold mukta-font text-sm hover:text-blue-400
            ${
              props.theme === "light" ? "text-neutral-800" : "text-neutral-300 "
            }
          `}>
            {" "}
            {props.name}{" "}
          </span>
          <span
            title={props.worktitle}
            arai-label={props.worktitle}
            className={`font-light mukta-font text-sm
            ${props.theme === "light" ? "text-neutral-500" : "text-neutral-400"}
          `}>
            {" "}
            {props.worktitle}{" "}
          </span>
        </a>
      </div>

      <div
        title={props.date}
        arai-label={props.date}
        className={`font-light mukta-font text-sm work-date
          ${props.theme === "light" ? "text-neutral-800" : "text-neutral-200"}
        `}>
        {props.date}
      </div>
    </div>
  );
};
