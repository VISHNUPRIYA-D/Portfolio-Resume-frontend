import React, { useContext, useEffect } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import { Link } from "react-router-dom";
import PreviewPage from "../components/PreviewPage"; 

const Preview = () => {
  const { setBlocks, handleDownload } = useContext(PortfolioContext);

  useEffect(() => {
    const savedBlocks = JSON.parse(localStorage.getItem("savedTemplate")) || [];
    if (savedBlocks.length) {
      setBlocks(savedBlocks);
    }
  }, [setBlocks]);

  return (
    <div className="p-4 bg-[#fcfbd4b8] min-h-screen w-full dark:bg-gray-800 dark:text-white">
      <h2 className="text-2xl font-semibold mb-4">Preview Template</h2>

      {/* White paper */}
      <div className="relative w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[400px] aspect-[210/297] overflow-auto">
        <PreviewPage  />
      </div>

      {/* Buttons */}
      <button
        onClick={handleDownload}
        className="mt-4 bg-purple-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-purple-600 text-base sm:text-xl"
      >
        Download
      </button>
      <Link
        to="/new"
        className="mt-4 mx-2 bg-gray-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-gray-600 text-base sm:text-xl"
      >
        Cancel
      </Link>
    </div>
  );
};

export default Preview;
