import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import ThemeToggle from "../../components/ThemeToggle";


const SignUp = () => {
  const [isFetching, setisFetching] = useState(false);

  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    // const signupId = document.getElementById("signUpForm");
    // const signUpForm = new FormData(signupId);
    // console.log(signUpForm);
navigate("/")

    try {
      setisFetching(true);
      // const res = await fetch("http://localhost:8080/auth/google/callback");
      // const data = await res.json();
      // console.log(data);
      // window.open("http://localhost:8080/auth/google/", "_self");
      // navigation("/");
    } catch (error) {
      console.log("signup error", error);
    } finally {
      setisFetching(false);
    }
  }

  return (
    <div className="flex justify-center items-center w-full h-[80vh]">
      {/* <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2> */}
      <form
        className="form"
        id="signUpForm"
      >
        <h2 className="form-title">
          Sign up to your account
        </h2>
        <div className="my-4">
          <label
            htmlFor="username"
           
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Please insert your username"
            className="form-input"
          />
        </div>
        <div className="my-4">
          <label
            htmlFor="email"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="Please insert your email"
            className="form-input"
          />
        </div>
        <div className="my-4">
          <label
            htmlFor="password"
          >
            Password
          </label>

          <input
            type="password"
            id="password"
            name="password"
            autoComplete="password"
            placeholder="Please insert your password"
            className="form-input"
          />
        </div>
        <button
          onClick={submit}
          type="submit"
          className="w-full"
        >
          {isFetching ? "...loading" : "Create an account"}
        </button>
        <div className="my-6 flex justify-between items-center w-full gap-2 md:w-3/4 m-auto flex-col md:flex-row">
          <div className="flex items-center justify-center text-sm gap-2 cursor-pointer border rounded-full p-2 hover:bg-blue-900 hover:text-white w-full">
            <FaFacebook size={25} />
            <p>Proceed with Facebook</p>
          </div>
          <div className="flex items-center justify-center text-sm gap-2 cursor-pointer border rounded-full p-2  hover:bg-blue-900 hover:text-white w-full">
            <FaGoogle size={25} />
            <p>Proceed with Google</p>
          </div>
        </div>
        <Link to={"/sign-in"} className="text-center mt-3 block text-sm ">
          Already have an account ?{" "}
          <span className="text-blue-700 dark:text-blue-500"> Sign in</span>
        </Link>
      </form>
      <ThemeToggle />
    </div>
  );
};

export default SignUp;
