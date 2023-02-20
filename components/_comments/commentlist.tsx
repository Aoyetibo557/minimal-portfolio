import { Comment } from "./comment";

type Props = {
  theme: string;
  comments: Comment[];
};

interface Comment {
  theme?: string;
  image: string;
  name: string;
  comment: string;
  date: string;
}

export const CommentList = ({ theme, comments }: Props) => {
  return (
    <div>
      {/* <div
        className={`font-bold text-xl m-3 ${
          theme === "light" ? "text-neutral-800" : "text-neutral-200"
        }
      `}>
        Recommendations from my co-workers and colleagues
      </div> */}
      <div>
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} theme={theme} />
        ))}
      </div>
    </div>
  );
};
