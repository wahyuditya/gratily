"use client";
import Button from "@/components/button";
import ErrorMessage from "@/components/errorMessage";
import Input from "@/components/input";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import SuccessMessage from "@/components/successMessge";

export default function ForgetPassword() {
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

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [laoding, setLoading] = useState(false);

  const handleForgetPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess("Password reset email sent. Check your inbox!");
    } catch {
      setError("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="logo flex justify-center">
        <img className="mt-[64px]" src="/logo.svg" alt="Logo" />
      </div>

      <div className="warper md:flex md:gap-[42px] md:mt-[100px] mt-[58px]">
        <div className="text flex justify-center items-center text-center mt-[56px] md:mt-0 text-[24px] w-full md:text-[32px] xl:px-[42px] xl:text-[42px] text-appColor-text font-playfair">
          <p>
            Enter the email address associated with your account, and we&apos;ll
            send you instructions to reset your password.
          </p>
        </div>

        <div className="flex flex-col justify-center align-middle items-center w-full h-fit mt-[56px]">
          {error && <ErrorMessage message={error}></ErrorMessage>}
          {success && <SuccessMessage message={success}></SuccessMessage>}
          <div className="login max-w-lg w-full">
            <form onSubmit={handleForgetPassword}>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                type="email"
                icon={mail}
                required
              />
              <div className="flex justify-center">
                <Button
                  label="Send"
                  type="submit"
                  variant="primary"
                  disabled={laoding}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="forgetPass absolute bottom-[32px] left-1/2 -translate-x-1/2 text-[14px] text-[#4e4e4e]">
        <Link href="/login">
          <Button label="Already have an account? Log in" variant="secondary" />
        </Link>
      </div>
    </>
  );
}
