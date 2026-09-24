import { Comment } from '../types/Comment';
import { CommentComponent } from './CommentComponent';

type Props = {
  comments: Comment[];
  onClick: (deletedComment: Comment) => void;
};

export const CommentsList = ({ comments, onClick }: Props) => {
  return (
    <>
      <p className="title is-4">Comments:</p>

      {comments.map((comment: Comment) => {
        return (
          <CommentComponent
            comment={comment}
            onClick={(deletedComment: Comment) => onClick(deletedComment)}
            key={comment.id}
          />
        );
      })}
    </>
  );
};
