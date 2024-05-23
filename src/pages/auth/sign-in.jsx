import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingIn = () => {
  const [isFetching, setisFetching] = useState(false);
  async function submit() {
    try {
      setisFetching(true);
      // const res = await fetch("http://localhost:8080/auth/google/callback");
      // const data = await res.json();
      // console.log(data);
      window.open("http://localhost:8080/auth/google/callback", "_self");
    } catch (error) {
      console.log("SingIn error", error);
    } finally {
      setisFetching(false);
    }
  }
  return (
    <div className="flex justify-center flex-col w-6/12 m-auto">
      {/* <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2> */}
      <h2 className="text-center mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-700">
        Sign in to your account
      </h2>

      <form className="border-solid space-y-6">
        <div className=" mt-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-800"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-indigo-700 sm:text-sm sm:leading-6"
            />
          </div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-800"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-indigo-700 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <button
          onClick={submit}
          type="submit"
          className="text-white bg-indigo-950 w-full p-1.5 rounded-md"
        >
          {isFetching ? "...loading" : "Login to account"}
        </button>
      </form>
      <Link to={"/sign-up"}>Sign up</Link>
      <div className="flex justify-center"></div>
    </div>
  );
};

export default SingIn;
