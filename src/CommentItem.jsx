import React from "react";
import CommentForm from "./CommentForm";
import ReplyIcon from "../public/assets/images/avatars/icon-reply.svg";

export default function CommentItem({
  comment,
  currentUser,
  onReplyClick,
  onEditClick,
  onSubmitReply,
  onSubmitEdit,
  activeReplyId,
  activeEditId,
  onVote,
}) {
  const isEditing = activeEditId === comment.id;
  const isReplying = activeReplyId === comment.id;

  return (
    <div className="comment-item rounded-xl p-4 bg-white w-full max-w-[1000px] my-4 flex items-start gap-6">
      {/* Score controls */}
      <div className="score-controls p-2 rounded-sm bg-purple-200 flex flex-col items-center gap-2">
        <button
          onClick={() => onVote(comment.id, +1)}
          className="hover:text-purple-600 transition-colors"
        >
          +
        </button>
        <span className="text-purple-600 font-medium">{comment.score}</span>
        <button
          onClick={() => onVote(comment.id, -1)}
          className="hover:text-purple-600 transition-colors"
        >
          –
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex items-center gap-4 mb-2">
          <img
            src={comment.user.image.png}
            alt={comment.user.username}
            className="w-6 h-6 rounded-full"
          />
          <span className="font-medium">{comment.user.username}</span>
          <span className="text-gray-400 text-sm">{comment.createdAt}</span>
        </div>

        {/* Content or Edit form */}
        {isEditing ? (
          <CommentForm
            initialValue={comment.content}
            submitLabel="Update"
            onSubmit={(newText) => onSubmitEdit(comment.id, newText)}
          />
        ) : (
          <p className="mb-4">{comment.content}</p>
        )}

        {/* Edit / Reply buttons */}
        <div className="flex gap-4 mb-4 text-sm">
          {comment.user.username === currentUser.username ? (
            <button
              onClick={() => onEditClick(comment.id)}
              className="text-purple-600 hover:underline"
            >
              Edit
            </button>
          ) : (
            <button
              className="flex flex-row flex-wrap gap-2 *:hover:text-purple-200"
              onClick={() => onReplyClick(comment.id)}
            >
              <ReplyIcon className="w-4 h-4 text-purple-200 stroke-purple-200 hover:stroke-purple-600" />
              <span className="text-purple-600 font-medium text-sm ">
                Reply
              </span>
            </button>
          )}
        </div>

        {/* Reply form when active */}
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            replyingTo={comment.user.username}
            onSubmit={(replyText) => onSubmitReply(comment.id, replyText)}
          />
        )}

        {/* Nested replies */}
        {comment.replies && (
          <div className="replies ml-8 border-l-2 border-gray-200 pl-6">
            {comment.replies.map((reply) => (
              <CommentItem
                key={reply.id}
                comment={reply}
                currentUser={currentUser}
                activeReplyId={activeReplyId}
                activeEditId={activeEditId}
                onReplyClick={onReplyClick}
                onEditClick={onEditClick}
                onSubmitReply={onSubmitReply}
                onSubmitEdit={onSubmitEdit}
                onVote={onVote}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
