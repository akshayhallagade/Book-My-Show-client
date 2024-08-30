import { useCallback, useRef } from "react";
import Header from "../components/Header";
import { useSigninUser } from "../hooks/mutation/userSignin";

function Signin() {
  const { mutateAsync: signInAsync } = useSigninUser();

  const email = useRef();
  const password = useRef();

  const handleFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      await signInAsync({
        email: email.current.value,
        password: password.current.value,
      });
    },
    [signInAsync]
  );

  return (
    <>
      <Header />
      <div className=" bg-gray-100 h-fit py-10 flex items-center justify-center ">
        <div className="bg-gray-800 bg-opacity-20 px-4 py-10 rounded-md">
          {/* //heading */}
          <h1 className="text-red-600 font-bold text-center uppercase underline">
            Signin
          </h1>
          <form
            action=""
            className="flex items-center justify-center flex-col gap-4 mt-6 "
            onSubmit={handleFormSubmit}
          >
            {/* //email */}
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-1.5"
              ref={email}
            />
            {/* //password */}
            <input
              type="password"
              placeholder="Password"
              className="px-3 py-1.5"
              ref={password}
            />
            {/* //submit */}
            <button className="px-3 py-1.5 rounded-md text-xs text-white bg-rose-600">
              Sign in
            </button>
            {/* Signup  */}
            <p className="text-xs">
              Dont have an account?{" "}
              <a href="/signup" className="hover:text-red-600 hover:underline">
                SIGN UP
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
