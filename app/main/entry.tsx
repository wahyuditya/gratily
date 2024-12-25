"use client";
import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";

function Entry() {
  const [isExpand, setIsExpand] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleExpand = () => {
    setIsExpand(!isExpand);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRemove = () => {
    console.log("remove");
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
        <div className="left w-[50%] flex justify-end items-center ">
          <FaEllipsisH
            onClick={handleMenuToggle}
            className="cursor-pointer mr-[18px] "
          />
          {isMenuOpen && (
            <div className="absolute right-[80px] bg-white border border-appColor-border rounded shadow-md px-[18px] py-[9px]">
              <button
                onClick={handleRemove}
                className="text-appColor-text text-[14px]"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Entry;
