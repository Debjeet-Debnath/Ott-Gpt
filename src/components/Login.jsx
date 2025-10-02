import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkForValidation } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [passwordSame, SetPasswordSame] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const verifyPassword = useRef(null);
  const name = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleChange = () => {
    if (verifyPassword.current.value !== password.current.value) {
      SetPasswordSame("Passwords don't match");
    } else if (verifyPassword.current.value == password.current.value) {
      SetPasswordSame("Password Matched");
      setTimeout(() => {
        SetPasswordSame(null);
      }, 3000);
    }
  };
  const handleformSubmission = () => {
    const message = checkForValidation(
      email.current.value,
      password.current.value
    );
    console.log(message);
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ) // THis is an api returns promise like others  and user is authenticated here
        .then(() => {
          // Signed up
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZAPhkIP75IVa4trptoEfFlzk-0KFEm0ibg&s",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
              setTimeout(() => {
                setErrorMessage("");
              }, 6000);
              console.log(error.message + "---" + error.code);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + "-" + error.message);
          console.log(error.code);
          console.log(error.message);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          setErrorMessage(error.message);
          setTimeout(() => {
            setErrorMessage("");
          }, 6000);
          console.log(error.message + "---" + error.code);
        });
    }
  };

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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg"
        >
          <h1 className="font-bold text-2xl my-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
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
            <>
              <label htmlFor="Verify New Password">{passwordSame}</label>
              <input
                ref={verifyPassword}
                type="Password"
                onChange={handleChange}
                placeholder="Verify New Password"
                className="p-4 my-4 w-full bg-gray-700"
              />
            </>
          )}
          <p>{errorMessage}</p>
          <button
            onClick={handleformSubmission}
            className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer hover:bg-red-500"
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
            <p>Already Registered? Click Here to Sign In</p>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
