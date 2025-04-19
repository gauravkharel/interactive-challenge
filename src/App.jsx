import React from "react";
import Comment from "./Comment";
import CommentReply from "./CommentReply";
const App = () => {
  return (
    <div className="mt-7 flex flex-col items-center min-h-screen bg-gray-100">    
      <h1 className="text-3xl font-bold text-purple-600 mb-4">Comment Section</h1>
      <Comment />
      <CommentReply/>
    </div>
  );
};

export default App;
