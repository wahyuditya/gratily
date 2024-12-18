"use client";
import Navbar from "../../components/navbar";
import AddEntry from "./addEntry";
import Entries from "./entries";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  if (!user) {
    return router.push("/login");
  }

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
