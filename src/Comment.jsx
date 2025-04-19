import React from "react";
import ReplyBtn from "./ReplyBtn";
import avt1 from "./assets/images/avatars/image-amyrobson.png";
import Plus from "./assets/images/icon-plus.svg";
import Minus from "./assets/images/icon-minus.svg";

const Comment = () => {
  return (
    <div className=" rounded-xl p-4 w-[1000px] my-2 bg-gray-50 flex items-start gap-6 ">
      <div className="p-2 rounded-sm flex flex-col gap-2 bg-purple-200 items-center">
        <button className="hover:stroke-purple-600 transition-colors">
          <img src={Plus} className="w-4 h-4 stroke-indigo-950" />
        </button>
        <span className="text-purple-600 font-medium">12</span>
        <button className="hover:stroke-purple-600 transition-colors">
          <img src={Minus} className="w-4 h-4 stroke-indigo-950" />
        </button>
      </div>
      <div>
        <div className="flex flex-row">
          <div className="left-a7 relative">
            <div>
              <div className="flex items-center gap-4">
                <div className="flex gap-4 items-center">
                  <img
                    src={avt1}
                    alt="Amy Robson"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-medium text-md">amyrobson</span>
                </div>
                <span className="text-grey-200 text-md">1 month ago</span>
              </div>
              <div className="w-[800px]">
                <span className="]">
                  Impahsdiuahis,asduaiuhsdiuah,as dhauhsda,dhaohsdhaodhsoiahsoha
                  d ashodihoaidhasoihdoihoids hsd oihaoidhoa.
                </span>
              </div>
            </div>
          </div>
          <ReplyBtn>reply</ReplyBtn>
        </div>
      </div>
    </div>
  );
};

export default Comment;
