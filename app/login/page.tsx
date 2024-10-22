export default function LoginPage() {
  return (
    <>
      <div className="logo flex justify-center mt-11">LOGO</div>
      <div className="text flex justify-center text-center mt-[40px]">
        A grateful heart is a happy heart, start <br /> logging your gratitude
        today
      </div>

      <div className="login flex justify-center align-middle flex-col mt-[40px]">
        <input className="email" type="email" required placeholder="Email" />
        <input
          className="password"
          type="password"
          required
          placeholder="Password"
        />
        <div className="buttons flex flex-col">
          <button>Login</button>
          <button>Sign up</button>
        </div>
        <div className="forgetPass flex justify-center bottom-4">
          Forgot password?
        </div>
      </div>
    </>
  );
}
