import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SingIn = () => {
  const [isFetching, setisFetching] = useState(false);
  const navigate = useNavigate();
  async function submit(e) {
    e.preventDefault();
  navigate("/");
    // const signInForm = document.getElementById("signInForm");
    // const formData = new FormData(signInForm);
    // console.log(formData);
    try {
      setisFetching(true);
      // const res = await fetch("http://localhost:8080/auth/google/callback");
      // const data = await res.json();
      // console.log(data);
      // window.open("http://localhost:8080/auth/google/callback", "_self");
    } catch (error) {
      console.log("SingIn error", error);
    } finally {
      setisFetching(false);
    }
  }
  return (
    <div className="flex justify-center items-center w-full h-[80vh]">
     
      <form className="form">
        <h2 className="form-title">
          Sign In to your account
        </h2>
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
            // required
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
            // required
            className="form-input"
          />
        </div>
        <button
          onClick={submit}
          type="submit"
          className=" w-full "
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
        <Link to={"/sign-up"} className="text-center mt-3 block text-sm ">
          Don't yet have an account ?
          <span className="text-blue-700 dark:text-blue-500"> Sign Up</span>
        </Link>
      </form>
    </div>
  );
};

export default SingIn;
