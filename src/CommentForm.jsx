// CommentForm.jsx
import React, { useState, useEffect } from "react";
import data from "../data.json";

export default function CommentForm({
  initialValue = "",
  submitLabel = "Send",
  onSubmit,
  replyingTo,      
}) {
  const [text, setText] = useState("");

  // when switching into edit mode, preload the textarea
  useEffect(() => {
    if (initialValue) {
      setText(initialValue);
    } else if (replyingTo) {
      setText(`@${replyingTo} `);
    }
  }, [initialValue, replyingTo]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;      // guard empty
    onSubmit(text.trim());         // bubble up new content
    setText(replyingTo ? `@${replyingTo} ` : "");
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="rounded-xl p-4 bg-gray-50 flex items-start gap-6">
        <img
          src={data.currentUser.image.webp}
          alt={data.currentUser.username}
          className="w-8 h-8 rounded-full"
        />
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          rows={4}
          className="flex-1 border-2 border-purple-200 rounded-md px-2 py-2 hover:border-purple-400 focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg text-white font-medium bg-purple-600 hover:bg-purple-500"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
