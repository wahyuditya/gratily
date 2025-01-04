"use client";
import { FormEvent, useState } from "react";
import { auth } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";
import ErrorMessage from "@/components/errorMessage";
import Input from "@/components/input";
import Button from "@/components/button";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [laoding, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const token = await credential?.user.getIdToken();
      document.cookie = `authToken=${token}; path=/`;

      setEmail("");
      setPassword("");

      router.push("/");
    } catch (e: any) {
      if (e.message === "Firebase: Error (auth/invalid-credential).") {
        setError("The email or password you entered is incorrect.");
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className="logo flex justify-center">
        <img className="mt-[64px]" src="/logo.svg" alt="Logo" />
      </div>

      <div className="warper md:flex md:gap-[42px] md:mt-[100px] mt-[58px]">
        <div className="text flex justify-center items-center text-center mt-[56px] md:mt-0 text-[24px] w-full md:text-[32px] xl:px-[42px] xl:text-[42px] text-appColor-text font-playfair">
          <p>
            A grateful heart is a happy heart, start logging your gratitude
            today.
          </p>
        </div>

        <div className="flex flex-col justify-center align-middle items-center w-full mt-[56px]">
          {error && <ErrorMessage message={error}></ErrorMessage>}
          <div className="login max-w-lg w-full">
            <form onSubmit={handleLogin}>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                type="email"
                icon={mail}
                required
              />
              <Input
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                type="password"
                icon={lock}
                required
              />
              <div className="buttons flex flex-col items-center gap-[4px] mt-[24px]">
                <Button
                  label="Login"
                  variant="primary"
                  type="submit"
                  disabled={laoding}
                  loading={laoding}
                />
              </div>
            </form>
            <div className="signUp flex w-full align-middle justify-center">
              <Link href="/register">
                {" "}
                <Button label="Sign up" variant="secondary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="forgetPass absolute bottom-[32px] left-1/2 -translate-x-1/2 text-[14px] text-[#4e4e4e]">
        <Link href="/forgetPassword">
          <Button label="Forgot password?" variant="secondary" />
        </Link>
      </div>
    </>
  );
}
