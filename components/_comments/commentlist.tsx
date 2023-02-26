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
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} theme={theme} />
      ))}
    </div>
  );
};
