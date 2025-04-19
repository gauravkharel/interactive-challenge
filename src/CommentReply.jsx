import React from "react";
import avt2 from "./assets/images/avatars/image-juliusomo.png";

const CommentReply = () => {
  return (
    <form action="">
      <div className="rounded-xl p-4 w-[1000px] h-[150px] my-2 bg-gray-50 flex items-start gap-6 ">
        <div className="flex flex-row">
          <img src={avt2} alt="Amy Robson" className="w-8 h-8 rounded-full" />
        </div>
        <textarea
          name="comment"
          className="px-2 h-[100px] py-2 w-[800px] border-2 border-purple-200 rounded-md  hover:border-purple-400 selection:border-purple-400"
          id="1"
        ></textarea>
        <button className="px-4 py-2 rounded-lg text-white font-medium bg-purple-600 hover:bg-purple-200">
          Reply
        </button>
      </div>
    </form>
  );
};

export default CommentReply;
