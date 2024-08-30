import DatePicker from "react-datepicker";
import Header from "../components/Header";
import { useCallback, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useSignupUser } from "../hooks/mutation/userSignup";

function Signup() {
  const { mutateAsync: signUpAsync } = useSignupUser();

  const firstName = useRef();
  const lastName = useRef();
  const dateOfBirth = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      await signUpAsync({
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        dateOfBirth: dateOfBirth.current.input.value,
        email: email.current.value,
        password: password.current.value,
      });
    },
    [signUpAsync]
  );

  return (
    <>
      <Header />
      <div className=" bg-gray-100 h-fit py-10 flex items-center justify-center ">
        <div className="bg-gray-800 bg-opacity-20 px-4 py-10 rounded-md">
          {/* //heading */}
          <h1 className="text-red-600 font-bold text-center uppercase underline">
            Signup
          </h1>
          <form
            className="flex items-center justify-center flex-col gap-4 mt-6 "
            onSubmit={handleSubmit}
          >
            {/* //firstName */}
            <input
              type="text"
              placeholder="firstName"
              className="px-3 py-1.5"
              ref={firstName}
            />
            {/* //lastName */}
            <input
              type="text"
              placeholder="lastName"
              className="px-3 py-1.5"
              ref={lastName}
            />
            {/* //email */}
            <DatePicker
              className="px-3 py-1.5"
              selected={new Date()}
              ref={dateOfBirth}
            />
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-1.5"
              ref={email}
            />
            {/* //password */}
            <input
              type="password"
              className="px-3 py-1.5"
              placeholder="password"
              ref={password}
            />
            {/* //submit-button */}
            <button className="px-3 py-1.5 rounded-md text-xs text-white bg-rose-600">
              Sign up
            </button>
            {/* Signup  */}
            <p className="text-xs">
              Already have an account?{" "}
              <a
                href="/signin"
                className="hover:text-red-600 hover:underline uppercase"
              >
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
