"use client";
import Navbar from "../../components/navbar";
import AddEntry from "./addEntry";
import Entries from "./entries";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";
import FetchEntry from "./fetchEntry";

export default function Home() {
  const router = useRouter();

  return (
    <>
      {/* <FetchEntry /> */}
      <Navbar />
      <AddEntry />
      <div className="entries relative h-screen">
        <Entries />
      </div>
    </>
  );
}
