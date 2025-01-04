"use client";
import Navbar from "../../components/navbar";
import AddEntry from "./addEntry";
import Entries from "./entries";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <AddEntry />
      <div className="entries relative h-screen">
        <Entries />
      </div>
    </>
  );
}
