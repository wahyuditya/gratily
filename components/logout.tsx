"use client";
import { useRouter } from "next/navigation";
import Button from "./button";
import { auth } from "@/lib/firebaseConfig";
import { signOut } from "firebase/auth";
import { useState } from "react";

function Logout() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await signOut(auth);
    document.cookie =
      "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/login");
    setLoading(false);
  };

  return (
    <>
      <div className="mr-[20px]">
        <Button
          onClick={handleLogout}
          label="Log out"
          variant="secondary"
          type="button"
          disabled={loading}
          loading={loading}
        />
      </div>
    </>
  );
}

export default Logout;
