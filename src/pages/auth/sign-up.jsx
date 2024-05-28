import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const SignUp = () => {
  const [isFetching, setisFetching] = useState(false);

  async function submit() {
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
    <div className="flex justify-center items-center w-full h-[100vh]">
      {/* <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2> */}
      <form className="w-[90vw] m-auto shadow-md hover:shadow-lg p-5 rounded-lg md:w-[600px]">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-700 mb-4">
          Sign up to your account
        </h2>
        <div className="my-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-gray-800 mb-1"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Please insert your username"
            // required
            className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm bg-gray-50 placeholder:text-gray-400 focus:border-0 sm:text-sm sm:leading-6"
            // className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-blue-700 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="my-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-800 mb-1"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="Please insert your email"
            // required
            className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm bg-gray-50 placeholder:text-gray-400 focus:border-0 sm:text-sm sm:leading-6"
            // className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-blue-700 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="my-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-800 mb-1"
          >
            Password
          </label>

          <input
            type="password"
            id="password"
            name="password"
            autoComplete="password"
            placeholder="Please insert your password"
            // required
            className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm bg-gray-50 placeholder:text-gray-400 focus:border-0 sm:text-sm sm:leading-6"
          />
        </div>
        <button
          onClick={submit}
          type="submit"
          className="text-white w-full p-1.5 rounded-md bg-blue-950 hover:bg-blue-900"
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
          <span className="text-blue-900"> Sign in</span>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
