"use client";
import Button from "@/components/button";
import SuccessMessage from "@/components/successMessge";
import { auth, db } from "@/lib/firebaseConfig";
import { collection, addDoc, serverTimestamp, doc } from "firebase/firestore";
import { FormEvent, useState } from "react";

function AddEntry() {
  const [entry, setEntry] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fade, setFade] = useState(false);

  const handleAddEntry = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const user = auth.currentUser;

    const userId = user?.uid;

    const entryData = {
      entryId: new Date().valueOf().toString(),
      text: entry,
      timestamp: serverTimestamp(),
    };

    try {
      await addDoc(
        collection(doc(collection(db, "users"), userId), "entry"),
        entryData
      );

      setSuccess(true);
      setFade(true);

      setTimeout(() => {
        setFade(false);
      }, 3000);
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log("Error adding entry " + e.message);
      }
    }
    setEntry("");
    setLoading(false);
  };

  return (
    <>
      <div className="warper grid place-content-center gap-[59px] mt-[30px] w-full">
        <div className="text max-w-[780px] font-playfair">
          <span className="text-[38px] font-light text-[rgba(78,78,78,0.8)]">
            &quot;I know your day might be a bit{" "}
            <span className="font-bold text-appColor-950">heavy,</span>
          </span>{" "}
          <br />{" "}
          <span className="text-[28px] text-[rgba(78,78,78,0.8)]">
            but take a moment to reflect, what are you{" "}
            <span className="italic text-appColor-950">grateful</span> for
            today?&quot;
          </span>
        </div>

        <form
          onSubmit={handleAddEntry}
          className="flex max-w-[780px] flex-col items-center w-full gap-[21px] rounded-[4px]"
        >
          <textarea
            onChange={(e) => setEntry(e.target.value)}
            value={entry}
            placeholder="I'm grateful for..."
            className="w-full h-[128px] px-[18px] py-[12px] bg-[#fafafa] text-appColor-text font-playfair text-[18px] border border-appColor-border rounded-[4px]"
          ></textarea>
          <Button
            label="Save"
            variant="primary"
            type="submit"
            loading={loading}
            disabled={!entry || loading}
          />
        </form>

        <div
          className={`transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {success && (
            <SuccessMessage message="Great! Your gratitude entry has been added." />
          )}
        </div>
      </div>
    </>
  );
}

export default AddEntry;
