import React, { useContext, useState } from "react";
import { BiLeftArrow, BiSolidLeftArrow } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";
import Title from "../components/Title";
import { PortfolioContext } from "../context/PortfolioContext";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { isDarkMode, setIsDarkMode, Logout} = useContext(PortfolioContext);
  const navigate = useNavigate();

  return (
    <div className="h-screen  dark:bg-gray-800 dark:text-white">
      <div className="flex p-5 gap-4 ">
        
        <button onClick={()=>navigate('/')}>
          <FaArrowLeft className="text-xl" />
        </button>

        <h1 className="flex m-auto font-semibold text-2xl">Settings</h1>
      </div>

      <div className="w-full  sm:pt-10 sm:px-10">
       <label
  htmlFor="themeToggle"
  className="flex items-center cursor-pointer"
>
  <p className="text-md sm:text-xl capitalize p-2  sm:p-5 backdrop-blur-md rounded">
    theme
  </p>
  <div className="absolute right-5 sm:right-10">
    <input
      type="checkbox"
      id="themeToggle"
      name="themeToggle"
      className="sr-only"
      checked={isDarkMode}
      onChange={() => setIsDarkMode(!isDarkMode)}
    />
    <div className=" w-6 sm:w-10 h-3 sm:h-4 bg-gray-300 rounded-full shadow-inner"></div>
    <div
      className={`dot absolute w-4 sm:w-6 h-4 sm:h-6 rounded-full shadow left-[-10px] top-[-2px] sm:-left-2 sm:-top-1 transition ${
        isDarkMode ? "translate-x-5 sm:translate-x-6 bg-purple-400" : "bg-slate-400 translate-x-2"
      }`}
    ></div>
  </div>
</label>
        <p className="text-md sm:text-xl capitalize p-2 sm:p-5 backdrop-blur-md rounded " onClick={Logout}>
          logout
        </p>
      </div>
    </div>
  );
};

export default Settings;
