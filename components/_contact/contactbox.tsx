import { BsEnvelope } from "react-icons/bs";
import Image from "next/image";

type Props = {
  theme: string;
  contactlist?: Contact[];
};

interface Contact {
  icon: string;
  name: string;
  link: string;
  theme?: string;
}

export const ContactBox = ({ theme }: Props) => {
  return (
    <div
      className={`flex flex-col gap-4 border-[0.5px] p-4 rounded-xl
      ${theme === "light" ? "border-neutral-300" : "border-neutral-700"}
    `}>
      <div className="flex flex-row items-center gap-2">
        <BsEnvelope
          className={`w-6 h-6
          ${theme === "light" ? "text-neutral-800" : "text-neutral-400"}
        `}
        />
        <span
          className={`mukta-font font-bold text-lg
            ${theme === "light" ? "text-neutral-800" : "text-neutral-400"}
        `}>
          {" "}
          Send me an Email{" "}
        </span>
      </div>

      <div
        className={`mukta-font font-light text-base
        ${theme === "light" ? "text-neutral-700" : "text-neutral-400"}
      `}>
        Just can't get enough of me? Send me an email and I'll get back to you
        as soon as possible!
      </div>

      <div>
        <a
          href="mailto:aoyetibo@gmail.com"
          className={`font-bold mukta-font text-base p-1 ${
            theme === "light"
              ? "text-neutral-500 hover:text-neutral-600  hover:border-[0.5px] hover:rounded-lg"
              : "text-neutral-400 hover:text-neutral-200 hover:border-[0.5px] hover:rounded-lg"
          }
        `}>
          aoyetibo@gmail.com
        </a>
      </div>
    </div>
  );
};
