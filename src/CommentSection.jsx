import React, { useState } from "react";
import data from "../data.json";
import CommentItem from "./CommentItem";
const CommentSection = () => {

  const [comments, setComments] = useState(data.comments);
  const [activeReplyId, setActiveReplyId] = useState(null);
  const [activeEditId, setActiveEditId] = useState(null);

  const handleVote = (id, delta) => {
    setComments(prev =>
      prev.map(comment => {
        // top-level comment?
        if (comment.id === id) {
          return { ...comment, score: comment.score + delta };
        }
        // maybe it’s in replies
        const newReplies = comment.replies.map(reply =>
          reply.id === id
            ? { ...reply, score: reply.score + delta }
            : reply
        );
        return { ...comment, replies: newReplies };
      })
    );
  };


  const onReplyClick = (id) => {
    setActiveReplyId(id);
    setActiveEditId(null);
  };

  const onEditClick = (id) => {
    setActiveEditId(id);
    setActiveReplyId(null);
  }

  const onSubmitReply = (parentId, text) => {
    const newReply = {
      id: Date.now(),
      content: text,
      createdAt: "Just now",
      score: 0,
      replyingTo: comments.find(c => c.id === parentId)?.user.username,
      user: data.currentUser,
      replies: [],
    };

    setComments(comments =>
      comments.map(c =>
        c.id === parentId
          ? { ...c, replies: [...c.replies, newReply] }
          : c
      )
    );
    setActiveReplyId(null);
  };

  const onSubmitEdit = (id, text) => {
    setComments(tree =>
      tree.map(c => {
        if (c.id === id) return { ...c, content: text };
        return {
          ...c,
          replies: c.replies.map(r =>
            r.id === id ? { ...r, content: text } : r
          ),
        };
      })
    );
    setActiveEditId(null);
  };

  return (
    <div className="px-6 py-8">
      <div className="flex items-center gap-3 mb-8">
        <img
          src={data.currentUser.image.png}
          alt={data.currentUser.username}
          className="w-8 h-8 rounded-full"
        />
        <span className="font-medium">{data.currentUser.username} yap's</span>
      </div>
      <div>
      {comments.map(c => (
        <CommentItem
        key={c.id}
        comment={c}
        currentUser={data.currentUser}
        activeReplyId={activeReplyId}
        activeEditId={activeEditId}
        onReplyClick={onReplyClick}
        onEditClick={onEditClick}
        onSubmitReply={onSubmitReply}
        onSubmitEdit={onSubmitEdit}
        onVote={handleVote}
        />
      ))}
      </div>
    </div>
  );
};

export default CommentSection;

