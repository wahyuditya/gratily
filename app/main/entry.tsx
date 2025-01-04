"use client";
import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { collection, Timestamp } from "firebase/firestore";

const ThreeDots = (
  <svg
    width="18"
    height="4"
    viewBox="0 0 18 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 0.987061C0.675 0.987061 0 1.66206 0 2.48706C0 3.31206 0.675 3.98706 1.5 3.98706C2.325 3.98706 3 3.31206 3 2.48706C3 1.66206 2.325 0.987061 1.5 0.987061ZM16.5 0.987061C15.675 0.987061 15 1.66206 15 2.48706C15 3.31206 15.675 3.98706 16.5 3.98706C17.325 3.98706 18 3.31206 18 2.48706C18 1.66206 17.325 0.987061 16.5 0.987061ZM9 0.987061C8.175 0.987061 7.5 1.66206 7.5 2.48706C7.5 3.31206 8.175 3.98706 9 3.98706C9.825 3.98706 10.5 3.31206 10.5 2.48706C10.5 1.66206 9.825 0.987061 9 0.987061Z"
      fill="#482200"
    />
  </svg>
);

interface EntryProps {
  entry: {
    id: string;
    text?: string;
    timestamp?: Timestamp;
  };
  isMenuIdOpen: boolean;
  onMenuToggle: () => void;
  user: User;
  entryId: string;
}

interface User {
  uid: string;
}

function Entry({
  entry,
  isMenuIdOpen,
  onMenuToggle,
  user,
  entryId,
}: EntryProps) {
  const [isExpand, setIsExpand] = useState(false);

  const handleExpand = () => {
    setIsExpand(!isExpand);
  };

  const handleRemove = async () => {
    if (user) {
      try {
        const entryDocRef = doc(
          collection(db, "users", user.uid, "entry"),
          entryId
        );
        await deleteDoc(entryDocRef);
        alert("Entry removed successfully");
      } catch {
        alert("Error removing entry: ");
      }
    }
  };

  const formattedDate = entry.timestamp?.toDate().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = entry.timestamp?.toDate().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <>
      <div className="entry flex w-full text-appColor-950 py-[8px] ">
        <div className="right flex w-[50%] flex-col">
          <div
            onClick={handleExpand}
            className={`text font-playfair font-medium text-[16px] transition-all duration-300 ease-in-out ${
              isExpand
                ? "h-fit"
                : "h-[24px] overflow-hidden text-ellipsis whitespace-nowrap"
            } `}
          >
            {entry.text}
          </div>

          <div className="time text-[10px]">
            {formattedDate}
            <br />
            {formattedTime}
          </div>
        </div>
        <div className="left w-[50%] flex justify-end items-center ">
          {isMenuIdOpen && (
            <div className="mr-[24px] right-[80px] bg-white border border-appColor-border rounded shadow-md px-[18px] py-[9px]">
              <button
                onClick={handleRemove}
                className="text-appColor-text text-[14px]"
              >
                Remove
              </button>
            </div>
          )}
          <div
            onClick={onMenuToggle}
            className="cursor-pointer mr-[18px] p-[4px]"
          >
            {ThreeDots}
          </div>
        </div>
      </div>
    </>
  );
}

export default Entry;
