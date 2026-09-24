import { Comment } from '../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentComponent = ({ comment }: Props) => {
  return (
    <article className="message is-small" data-cy="Comment">
      <div className="message-header">
        <a href={`mailto:${comment.email}`} data-cy="CommentAuthor">
          {comment.name}
        </a>
        <button
          data-cy="CommentDelete"
          type="button"
          className="delete is-small"
          aria-label="delete"
        >
          delete button
        </button>
      </div>

      <div className="message-body" data-cy="CommentBody">
        {comment.body}
      </div>
    </article>
  );

  {
    /* <article className="message is-small" data-cy="Comment">
        <div className="message-header">
          <a href="mailto:misha@mate.academy" data-cy="CommentAuthor">
            Misha Hrynko
          </a>
          <button
            data-cy="CommentDelete"
            type="button"
            className="delete is-small"
            aria-label="delete"
          >
            delete button
          </button>
        </div>

        <div className="message-body" data-cy="CommentBody">
          Some comment
        </div>
      </article>
      <article className="message is-small" data-cy="Comment">
        <div className="message-header">
          <a href="mailto:misha@mate.academy" data-cy="CommentAuthor">
            Misha Hrynko
          </a>

          <button
            data-cy="CommentDelete"
            type="button"
            className="delete is-small"
            aria-label="delete"
          >
            delete button
          </button>
        </div>
        <div className="message-body" data-cy="CommentBody">
          One more comment
        </div>
      </article>
      <article className="message is-small" data-cy="Comment">
        <div className="message-header">
          <a href="mailto:misha@mate.academy" data-cy="CommentAuthor">
            Misha Hrynko
          </a>

          <button
            data-cy="CommentDelete"
            type="button"
            className="delete is-small"
            aria-label="delete"
          >
            delete button
          </button>
        </div>

        <div className="message-body" data-cy="CommentBody">
          {'Multi\nline\ncomment'}
        </div>
      </article> */
  }
};
