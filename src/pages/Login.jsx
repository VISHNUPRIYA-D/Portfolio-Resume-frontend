import React, { useContext } from "react";
import Title from "../components/Title";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { PortfolioContext } from "../context/PortfolioContext";

const Login = () => {
  const {username,setUsername,password,setPassword,submitLogin} = useContext(PortfolioContext)
  return (
    <div className="w-full h-screen bg-[#FDFBD4] flex flex-col justify-center items-center gap-5">
      <Logo className="w-68 h-36"/>
      <Title text1={"login"} text2={"here"}  className="mt-[-10px]"/>
      <form onSubmit={submitLogin} className="h-64 sm:h-max w-72 sm:w-96 shadow-2xl border-gray-500 rounded-md bg-white text-center p-6">
        <div className="mb-3 text-left ">
          <label className="block mb-1 ">Username</label>
          <input type="text" className=" border border-gray-400 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-300 px-3 py-1 " 
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          required/>
        </div>

         <div className="mb-3 text-left ">
          <label className="block mb-1 ">Password</label>
          <input type="text" className=" border border-gray-400 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-300 px-3 py-1 " 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required/>
        </div>


        <button type="submit" className="w-full bg-[#cf6dfc] rounded-2xl my-8 py-1 hover:bg-[#a23ecf] hover:shadow-xl " >Login</button>
        
      </form>
      <p className="text-center flex flex-col">or <span className="text-[#cf6dfc]  hover:cursor-pointer hover:text-[#a23ecf] " ><Link to={'/signup'}> New account ? </Link></span></p>
    </div>
  );
};

export default Login;
