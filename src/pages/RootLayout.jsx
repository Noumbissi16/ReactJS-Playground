import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { navLinks } from "../lib/constants";

const RootLayout = () => {
  return (
    <>
      <NavBar navLinks={navLinks} />
      <div className="mt-20">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
