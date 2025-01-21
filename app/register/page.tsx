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
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const eye = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
        stroke="#4E4E4E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#4E4E4E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const eyeOff = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_125_2)">
        <path
          d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003M9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003"
          stroke="#4E4E4E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 1L23 23"
          stroke="#4E4E4E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_125_2">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

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

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long, contain at least one uppercase letter and one number."
      );
      setLoading(false);
      return;
    }

    // try {
    //   const response = await axios.post("/api/register", { email, password });
    //   console.log(response.data.message);
    //   // Handle successful registration (e.g., redirect to login page)
    // } catch (error: any) {
    //   setError(error.response?.data?.error || "An unknown error occurred.");
    // } finally {
    //   setLoading(false);
    // }

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
      router.push("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (!name) {
          setError("Please fill the name.");
        } else {
          const firebaseError = err as { code?: string };
          if (firebaseError.code === "auth/email-already-in-use") {
            setError("The email address is already use.");
            setLoading(false);
          } else if (firebaseError.code === "auth/invalid-email") {
            setError("Email invalid.");
            setLoading(false);
          } else if (firebaseError.code === "auth/missing-password") {
            setError("Please fill the password.");
            setLoading(false);
          } else if (firebaseError.code == "auth/weak-password") {
            setError("Password must be at least 8 characters long.");
            setLoading(false);
          } else {
            setError("An error occurred. Please try again.");
            setLoading(false);
          }
        }
      }
    }
    setLoading(false);
  };

  return (
    <>
      <div className="logo flex justify-center">
        <img className="md:mt-[62px] mt-[34px]" src="/logo.svg" alt="Logo" />
      </div>

      <div className="warper  md:flex md:gap-[42px] mt-[28px] justify-center items-center">
        <div className="text flex justify-center items-center text-center mt-[28px] md:mt-0 text-[24px] w-full md:text-[32px] xl:px-[42px] xl:text-[42px] text-appColor-text font-playfair">
          <p>
            Gratitude journaling helps reduce stress, boost happiness, and
            improve your well-being.
          </p>
        </div>

        <div className="flex flex-col justify-center align-middle items-center w-full mt-[28px] ">
          <div className="max-w-lg w-full">
            {error && <ErrorMessage message={error}></ErrorMessage>}
            <form onSubmit={handleSignUp}>
              <Input onChange={handleName} label="Name" type="text" required />
              <Input
                onChange={handleEmail}
                label="Email"
                type="email"
                required
              />
              <Input
                onChange={handlePassword}
                label="Password"
                type={showPassword ? "text" : "password"}
                required
                trailingIcon={{
                  icon: showPassword ? eyeOff : eye,
                  onClick: () => setShowPassword(!showPassword),
                }}
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

      <div className=" w-full flex justify-center content-center mt-[56px] text-[#4e4e4e]">
        <Link href="/login">
          <Button label="Already have an account? Log in" variant="secondary" />
        </Link>
      </div>
    </>
  );
}
