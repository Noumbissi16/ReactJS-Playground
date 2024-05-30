import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { navLinks } from "../utils/constants";

const NavBar = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);
  return (
    <div className="bg-black">
      <nav className="absolute top-0 text-white p-4 flex  items-center justify-between w-full">
        <Link to={"/"}>
          <div className="w-9 h-9 lg:w-12 lg:h-12">
            <img src="/logo192.png" alt="logo" className="w-full h-full" />
          </div>
        </Link>
        <MdMenu
          className="w-9 h-9 cursor-pointer text-slate-100"
          onClick={() => {
            setIsNavBarVisible(!isNavBarVisible);
          }}
        />
        <div
          className={`absolute top-14 right-0 w-full transition-all bg-blue-950 py-4  ${
            !isNavBarVisible && "hidden"
          }`}
        >
          <ul className=" flex justify-between flex-col w-full items-center">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="p-1"
                onClick={() => {
                  setIsNavBarVisible(!isNavBarVisible);
                }}
              >
                <Link
                  to={link.href}
                  className="capitalize hover:text-slate-400 hover:border-b-2 hover:border-b-slate-400"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
