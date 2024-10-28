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
  return (
    <div className="login max-w-lg w-full mt-[56px]">
      <form action="#">
        <div className="email relative mb-[18px]">
          <div className="absolute left-[12px] top-1/2 -translate-y-1/2">
            {mail}
          </div>
          <input
            className="w-full h-[42px] px-[46px] rounded-[4px] border border-[#C1C1C1] bg-[#fafafa]"
            type="email"
            required
            placeholder="Email"
          />
        </div>

        <div className="password relative">
          <div className="absolute left-[12px] top-1/2 -translate-y-1/2">
            {lock}
          </div>
          <input
            className="w-full h-[42px] px-[46px] rounded-[4px] border border-[#C1C1C1] bg-[#fafafa]"
            type="password"
            required
            placeholder="Password"
          />
        </div>
        <div className="buttons flex flex-col items-center gap-[4px] mt-[24px]">
          <button className="h-[42px] px-[32px] w-[120px] rounded-[4px] bg-appColor-500 hover:bg-appColor-400 text-[#4e4e4e] text-[14px]">
            Login
          </button>
          <button className="h-[42px] px-[32px] w-[120px] rounded-[4px] text-[#4e4e4e] text-[14px]">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
