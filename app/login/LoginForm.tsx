"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import Link from "next/link";

function LoginForm() {
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
  const handleLogin = () => {
    alert("login click");
  };

  const handleSignUp = () => {};

  return (
    <div className="login max-w-lg w-full mt-[56px]">
      <form action="#">
        <Input label="Email" type="email" icon={mail} required />
        <Input label="Password" type="password" icon={lock} required />
        <div className="buttons flex flex-col items-center gap-[4px] mt-[24px]">
          <Button label="Login" onClick={handleLogin} variant="primary" />
        </div>
      </form>
      <div className="signUp flex w-full align-middle justify-center">
        <Link href="/register">
          {" "}
          <Button label="Sign up" onClick={handleSignUp} variant="secondary" />
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
