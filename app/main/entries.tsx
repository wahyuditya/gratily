"use client";
import { useState } from "react";
import Entry from "./entry";

function Entries() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`background ${
          isOpen ? "h-screen" : "h-[214px] rounded-t-[18px]"
        }  fixed bottom-0 left-0 right-0 bg-[linear-gradient(to_right_top,#fffbc5,#fffcce,#fffdd8,#fffee1,#ffffea)] border border-appColor-border transition-all duration-300 ease-in-out`}
      >
        <div className="logs px-[18px]">
          <div className="top h-[71px] mb-[32px] relative justify-center flex items-center w-full">
            <div className="title text-center font-playfair font-medium text-[26px] text-appColor-950">
              My Gratitude
            </div>
            <button
              className="absolute px-[18px] py-[4px] font-medium text-amber-950 right-[0px] top-1/2 -translate-y-1/2"
              onClick={handleOpen}
            >
              {isOpen ? `Close` : `Open`}
            </button>
          </div>
          <Entry />
        </div>
      </div>
    </>
  );
}

export default Entries;
