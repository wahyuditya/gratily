"use client";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db, auth } from "@/lib/firebaseConfig";
import Entry from "./entry";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "@/components/Loader";

function Entries() {
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState<
    { id: string; text: string; timestamp: any }[]
  >([]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (user) {
      const userId = user.uid;
      const entriesCollection = collection(db, "users", userId, "entry");
      const entriesQuery = query(
        entriesCollection,
        orderBy("timestamp", "desc")
      );

      const unsubscribe = onSnapshot(entriesQuery, (snapshot) => {
        const entriesList = snapshot.docs.map((doc) => ({
          id: doc.id,
          text: doc.data().text,
          timestamp: doc.data().timestamp,
        }));
        setEntries(entriesList);
        setLoading(false);
      });

      return () => unsubscribe();
    }
  }, [user]);

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

          {loading ? (
            <div className="flex justify-center">
              <Loader />
            </div>
          ) : (
            <div className=" overflow-auto h-[calc(100vh-0px)] custom-scrollbar">
              {entries.map((entry) => (
                <Entry key={entry.id} entry={entry} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Entries;
