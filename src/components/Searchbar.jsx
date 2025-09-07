import React, { useContext } from 'react'
import { IoIosSearch } from "react-icons/io";
import { PortfolioContext } from '../context/PortfolioContext';


const Searchbar = () => {
  const {search,setSearch} = useContext(PortfolioContext);
  return (
    <div className="sm:ml-44 flex-1 p-5 mt-12 sm:mt-0 left-1 text-black ">
      <div className="flex items-center w-full max-w-md bg-white border border-gray-300 rounded-full px-3 py-1 sm:py-2 shadow-sm focus-within:outline-none focus-within:ring-purple-500 focus-within:ring-1 focus-within:shadow-xl transition">
        <IoIosSearch className="text-gray-500 text-xl mr-2" />
        <input
          type="text"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full focus:outline-none text-sm sm:text-base"
        />
      </div>
    </div>
  )
}

export default Searchbar
