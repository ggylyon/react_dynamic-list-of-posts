import { Comment } from '../types/Comment';
import { CommentComponent } from './CommentComponent';

type Props = {
  comments: Comment[];
  onPointerDown: (deletedComment: Comment) => void;
};

export const CommentsList = ({
  comments,
  onPointerDown: onPointerDown,
}: Props) => {
  return (
    <>
      <p className="title is-4">Comments:</p>

      {comments.map((comment: Comment) => {
        return (
          <CommentComponent
            comment={comment}
            onPointerDown={(deletedComment: Comment) =>
              onPointerDown(deletedComment)
            }
            key={comment.id}
          />
        );
      })}
    </>
  );
};
