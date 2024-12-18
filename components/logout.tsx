"use client";
import { useRouter } from "next/navigation";
import Button from "./button";
import { auth } from "@/lib/firebaseConfig";
import { signOut } from "firebase/auth";

function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <>
      <div className="mr-[20px]">
        <Button
          onClick={handleLogout}
          label="Log out"
          variant="secondary"
          type="button"
          bordered
        />
      </div>
    </>
  );
}

export default Logout;
