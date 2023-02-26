import Image from "next/image";

type Props = {
  theme?: string;
  image: string;
  name: string;
  comment: string;
  date: string;
};

export const Comment = ({ theme, image, name, comment, date }: Props) => {
  return (
    <div
      className={`flex flex-col gap-4 rounded-xl p-4 w-4/5 comment-box
    ${theme === "light" ? "text-neutral-800" : "text-neutral-200"}
    `}>
      <div className="">
        <div
          className={`font-light mukta-font text-base ${
            theme === "light" ? "text-neutral-800" : "text-neutral-500"
          }
        `}>
          <span
            className={`font-bold text-xl mr-3 ${
              theme === "light" ? "text-neutral-500" : "text-neutral-500"
            }
          `}>
            |
          </span>
          {date}
        </div>
      </div>
      <div
        className={`font-light mukta-font text-base comment-p ${
          theme === "light" ? "text-neutral-800" : "text-neutral-200"
        }
      `}>
        {comment}
      </div>
      <div
        className={`font-bold mukta-font text-base ${
          theme === "light" ? "text-neutral-800" : "text-neutral-500"
        }
      `}>
        {name}
      </div>
    </div>
  );
};
