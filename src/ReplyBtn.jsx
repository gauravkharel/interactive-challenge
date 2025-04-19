import React from "react";
import ReplyIcon from "./assets/images/icon-reply.svg";

const ReplyBtn = () => {
  return (
    <button className="flex flex-row flex-wrap gap-2 hover:text-purple-200">
      <ReplyIcon className="w-4 h-4 text-purple-200 stroke-purple-200 hover:stroke-purple-600" />
      <span className="text-purple-600 font-medium text-sm hover:text-purple-200">
        Reply
      </span>
    </button>
  );
};

export default ReplyBtn;
