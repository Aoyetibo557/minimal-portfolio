import { MdOutlineHomeWork } from "react-icons/md";
import { Work } from "./work";

type Props = {
  theme: string;
  worklist: Work[];
};

interface Work {
  image: string;
  worktitle: string;
  name: string;
  date: string;
  theme?: string;
}

export const WorkBox = ({ theme, worklist }: Props) => {
  return (
    <div
      className={`flex flex-col gap-4 border-[0.5px] p-4 rounded-xl
      ${theme === "light" ? "border-neutral-300" : "border-neutral-700"}
    `}>
      <div className="flex flex-row items-center gap-2">
        <MdOutlineHomeWork
          className={`w-6 h-6
          ${theme === "light" ? "text-neutral-800" : "text-neutral-400"}
        `}
        />
        <span
          className={`mukta-font font-bold text-lg
            ${theme === "light" ? "text-neutral-800" : "text-neutral-400"}
        `}>
          {" "}
          Work{" "}
        </span>
      </div>
      {worklist.map((work, index) => (
        <Work key={index} {...work} theme={theme} />
      ))}
      <div className="flex flex-row items-center justify-center">
        <button
          disabled={true}
          className={`font-medium mukta-font text-base p-1 w-40 rounded-lg ${
            theme === "light"
              ? "text-neutral-500 border-[0.5px] border-neutral-500 hover:text-neutral-600 "
              : "text-neutral-400 border-[0.5px] border-neutral-700 hover:text-neutral-200"
          }
        `}>
          Download CV <span className="text-neutral-500 text-sm">(PDF)</span>
        </button>
      </div>
    </div>
  );
};
