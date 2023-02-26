import { StaticImageData } from "next/image";
import Image from "next/image";
import { MdOutlineHomeWork } from "react-icons/md";

type WorkProps = {
  theme?: string;
  image: string | StaticImageData;
  worktitle: string;
  name: string;
  date: string;
};
export const Work = (props: WorkProps) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-4">
        <Image
          src={props.image}
          alt="logo"
          width={50}
          height={50}
          className="rounded-full scale-75"
        />

        <div className="flex flex-col">
          <span
            className={`font-bold mukta-font text-base
            ${props.theme === "light" ? "text-neutral-800" : "text-neutral-300"}
          `}>
            {" "}
            {props.name}{" "}
          </span>
          <span
            className={`font-light mukta-font text-base
            ${props.theme === "light" ? "text-neutral-500" : "text-neutral-400"}
          `}>
            {" "}
            {props.worktitle}{" "}
          </span>
        </div>
      </div>

      <div
        className={`font-light mukta-font text-base work-date
          ${props.theme === "light" ? "text-neutral-800" : "text-neutral-200"}
        `}>
        {props.date}
      </div>
    </div>
  );
};
