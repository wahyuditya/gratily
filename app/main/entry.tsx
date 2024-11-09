"use client";
import { useState } from "react";

function Entry() {
  const [isExpand, setIsExpand] = useState(true);

  const handleExpand = () => {
    setIsExpand(!isExpand);
  };

  return (
    <>
      <div className="entry flex w-full text-appColor-950">
        <div className="right flex w-[50%] flex-col">
          <div
            onClick={handleExpand}
            className={`text font-playfair font-medium text-[16px] transition-all duration-300 ease-in-out ${
              isExpand
                ? "h-[24px] overflow-hidden text-ellipsis whitespace-nowrap"
                : "h-fit"
            } `}
          >
            I'm grateful for the support of my friends who always know how to
            lift my spirits.
          </div>

          <div className="time text-[10px]">
            Tuesday, 21 march 2024
            <br />
            01 . 24 AM
          </div>
        </div>
        <div className="left w-[50%] flex justify-end items-center">
          <button className="text-[14px] px-[18px] py-[4px] rounded-[4px] border border-appColor-950">
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default Entry;
