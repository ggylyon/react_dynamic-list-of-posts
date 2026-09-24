import { Comment } from '../types/Comment';
import { CommentComponent } from './CommentComponent';

type Props = {
  comments: Comment[];
};

export const CommentsList = ({ comments }: Props) => {
  return (
    <>
      <p className="title is-4">Comments:</p>

      {comments.map((comment: Comment) => {
        return <CommentComponent comment={comment} key={comment.id} />;
      })}
    </>
  );
};
