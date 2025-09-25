import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkForValidation } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleformSubmission = () => {
    const message = checkForValidation(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);
  }


  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/fcfcd5ee-d40a-43d7-bebc-9e9aae7f7798/web/IN-en-20250922-TRIFECTA-perspective_4fd75b17-c493-446a-a3de-3d1ab753c304_large.jpg"
            alt="background image"
          />
        </div>
        <form  onSubmit={(e) => e.preventDefault()}className="w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg">
          <h1 className="font-bold text-2xl my-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}
          <input
           ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            ref={password}
            type="Password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          {!isSignIn && (
            <input
              type="Password"
              placeholder="Verify New Password"
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}
          <p>{errorMessage}</p>
          <button onClick={handleformSubmission}
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          {isSignIn ? (
            <>
              <p onClick={toggleSignIn}>
                New to Netflix?
                <span className="font-bold underline cursor-pointer">
                  Sign Up
                </span>{" "}
                for membership
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to Netflix! More than 53+ countries are connected
                through our platform
              </p>
              <p>
                Already Registered? Click Here to Sign In
              </p>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
