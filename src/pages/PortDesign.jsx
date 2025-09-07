import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PortfolioContext } from "../context/PortfolioContext";
import { FaArrowLeft } from "react-icons/fa6";
import ExportPortfolio from "../components/ExportPortfolio";

const PortDesign = () => {
  const { id } = useParams();
  const { portTemplate, finalUser, def,printRef, navigate,menuOpen } =
    useContext(PortfolioContext);

  // find template by id
  const selectedTemplate = portTemplate.find((t) => t.id.toString() === id);

  if (!selectedTemplate) {
    return <div className="p-6 text-red-500">Template not found</div>;
  }

  const Component = selectedTemplate.component;

  return (
    <div className="min-h-screen dark:bg-gray-800 bg-gray-100 dark:text-white px-4 sm:px-6 py-6 flex flex-col">
      <div className="flex items-center gap-3 sm:gap-5 mb-6">
        <FaArrowLeft
          onClick={() => navigate("/")}
          className="mt-1 text-xl sm:text-2xl cursor-pointer hover:text-gray-600"
        />
        <h2 className="font-semibold text-lg sm:text-2xl dark:text-white text-gray-800">
          Selected Template
        </h2>
      </div>

      <div
        ref={printRef}
        className="bg-white rounded-xl shadow-md w-full max-w-5xl mx-auto  sm:p-6 lg:p-10 overflow-x-auto"
      >
        <Component user={finalUser} def={def} />
      </div>

      <div className="flex justify-center sm:justify-end">
        <ExportPortfolio user={finalUser} def={def} selectedTemplate={selectedTemplate.id} menuOpen={menuOpen}/>
      </div>
    </div>
  );
};

export default PortDesign;
