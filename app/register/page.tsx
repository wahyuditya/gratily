"use client";
import Input from "@/components/input";
import Button from "@/components/button";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../lib/firebaseConfig";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ErrorMessage from "@/components/errorMessage";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [laoding, setLoading] = useState(false);

  const router = useRouter();

  const [error, setError] = useState<string | null>(null);

  const user_icon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
        stroke="#4E4E4E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke="#4E4E4E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const mail = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
        stroke="#4E4E4E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 6L12 13L2 6"
        stroke="#4E4E4E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const lock = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
        stroke="#4E4E4E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
        stroke="#4E4E4E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  //use client for console log (dev propose), remove use client when done debuging

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const displayName = name.replace(/\b\w/g, (char) => char.toUpperCase());
      await updateProfile(credential.user, {
        displayName: displayName,
      });

      setError(null);
      setEmail("");
      setPassword("");
      setName("");

      const token = await credential.user.getIdToken();
      document.cookie = `authToken=${token}; path=/`;

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (!name) {
          setError("Please fill the name.");
        } else {
          const firebaseError = err as { code?: string };
          if (firebaseError.code === "auth/email-already-in-use") {
            setError("The email address is already use.");
          } else if (firebaseError.code === "auth/invalid-email") {
            setError("Email invalid.");
          } else if (firebaseError.code === "auth/missing-password") {
            setError("Please fill the password.");
          } else if (firebaseError.code == "auth/weak-password") {
            setError("Password must be at least 8 characters long.");
          } else {
            setError("An error occurred. Please try again.");
          }
        }
      }
    }
    setLoading(true);
  };

  return (
    <>
      <div className="logo flex justify-center">
        <img className="mt-[64px]" src="/logo.svg" alt="Logo" />
      </div>

      <div className="warper md:flex md:gap-[42px] md:mt-[100px] mt-[58px]">
        <div className="text  flex justify-center items-center text-center mt-[56px] md:mt-0 text-[24px] w-full md:text-[32px] xl:px-[42px] xl:text-[42px] text-appColor-text font-playfair">
          <p>
            Gratitude journaling helps reduce stress, boost happiness, and
            improve your well-being.
          </p>
        </div>

        <div className="flex  justify-center align-middle items-center w-full">
          <div className="max-w-lg w-full mt-[56px]">
            {error && <ErrorMessage message={error}></ErrorMessage>}
            <form onSubmit={handleSignUp}>
              <Input
                onChange={handleName}
                label="Name"
                type="text"
                icon={user_icon}
                required
              />
              <Input
                onChange={handleEmail}
                label="Email"
                type="email"
                icon={mail}
                required
              />
              <Input
                onChange={handlePassword}
                label="Password"
                type="password"
                icon={lock}
                required
              />
              <div className=" flex flex-col items-center gap-[4px] mt-[24px]">
                <Button
                  label="Sign up"
                  variant="primary"
                  type="submit"
                  disabled={laoding}
                  loading={laoding}
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className=" absolute bottom-[32px] left-1/2 -translate-x-1/2 text-[14px] text-[#4e4e4e]">
        <Link href="/login">
          <Button label="Already have an account? Log in" variant="secondary" />
        </Link>
        ;
      </div>
    </>
  );
}
