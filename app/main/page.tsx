"use client";
import Navbar from "../../components/navbar";
import AddEntry from "./addEntry";
import Entries from "./entries";

export default function Home() {
  return (
    <>
      <div className="mainPage">
        <Navbar />
        <AddEntry />
        <div className="entries relative h-screen">
          <Entries />
        </div>
      </div>
    </>
  );
}
