"use client";
import { useRouter } from "next/navigation";
import Button from "./button";
import { auth } from "@/lib/firebaseConfig";
import { signOut } from "firebase/auth";

function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    document.cookie =
      "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
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
        />
      </div>
    </>
  );
}

export default Logout;
