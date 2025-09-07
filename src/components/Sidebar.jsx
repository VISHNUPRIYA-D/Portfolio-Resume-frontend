import React, { useContext, useState } from "react";
import Logo from "./Logo";
import { LuCirclePlus } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { PortfolioContext } from "../context/PortfolioContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { menubarClose, menuOpen, setMenuOpen ,token, } =
    useContext(PortfolioContext);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden sm:flex w-44 h-screen bg-gradient-to-b from-[#c1bfff] to-[#cf6dfc] fixed flex-col text-black z-50">
        <Link to="/">
          <Logo className="w-28 h-24 " />
        </Link>

        <div className="flex flex-col h-[80%] justify-between flex-1 font-semibold">
          <div className="flex flex-col gap-3">
            <Link
              to="/new"
              className="flex hover:w-full px-5 pt-2 hover:cursor-pointer hover:bg-purple-400"
            >
              <LuCirclePlus className="mt-1 m-3 text-xl text-[#fdfbd4]" />
              Create
            </Link>

            <Link
              to="/"
              className="hover:w-full px-5 p-2 hover:cursor-pointer hover:bg-purple-400"
            >
              Home
            </Link>


            <Link
              to="/dashboard"
              className="hover:w-full px-5 p-2 hover:cursor-pointer hover:bg-purple-400"
            >
              Dashboard
            </Link>

            <Link
              to="/downloads"
              className="hover:w-full px-5 p-2 hover:cursor-pointer hover:bg-purple-400"
            >
              Downloads
            </Link>
             <Link
              to="/settings"
              className="hover:w-full px-5 p-2 hover:cursor-pointer hover:bg-purple-400"
            >
              Settings
            </Link>
          </div>
          
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="sm:hidden w-full h-12 bg-gradient-to-b from-[#c1bfff] to-[#cf6dfc] fixed top-0 flex items-center justify-between px-4 z-50">
        <Link to="/">
          <Logo className="w-22 h-20" />
        </Link>
        <div className="flex items-center gap-3">
          {!token && (
            <Link
              to="/login"
              className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600 transition"
            >
              Login
            </Link>
          )}
          <Link to='/new'><LuCirclePlus className="mt-3 m-3 text-xl text-[#fdfbd4]" /></Link>
          <GiHamburgerMenu
            className="text-xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden fixed top-16 right-0 bg-white dark:bg-[#df99ff] dark:text-white shadow-lg rounded-md w-48 p-3 z-50">
          <Link to="/" onClick={menubarClose}>
            <p className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Home</p>
          </Link>
          
          <Link to="/dashboard" onClick={menubarClose}>
            <p className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
              Dashboard
            </p>
          </Link>
           <Link to="/downloads" onClick={menubarClose}>
            <p className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
              Downloads
            </p>
          </Link>
          <Link to="/settings" onClick={menubarClose}>
            <p className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
              Settings
            </p>
          </Link>
        </div>
      )}
    </>
  );
};

export default Sidebar;
