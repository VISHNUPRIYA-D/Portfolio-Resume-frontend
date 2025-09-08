import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PortfolioContext } from "../context/PortfolioContext";
import { FaArrowLeft } from "react-icons/fa6";

const Template = () => {
  const { id } = useParams();
  const {
    templates,
    finalUser,
    def,
    handleDownloadPdf,
    printRef,
    navigate,
  } = useContext(PortfolioContext);

  // find template by id
  const selectedTemplate = templates.find((t) => t.id.toString() === id);

  if (!selectedTemplate) {
    return <div className="p-6 text-red-500">Template not found</div>;
  }

  const Component = selectedTemplate.component;

  return (
    <div className="min-h-screen dark:bg-gray-800 bg-gray-100 dark:text-white px-4 sm:px-6 py-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 sm:gap-5 mb-6">
        <FaArrowLeft
          onClick={() => navigate("/")}
          className="mt-1 text-xl sm:text-2xl cursor-pointer hover:text-gray-600"
        />
        <h2 className="font-semibold text-lg sm:text-2xl dark:text-white text-gray-800">
          Selected Template
        </h2>
      </div>

      {/* Template Preview */}
      <div
        ref={printRef}
        className="bg-white rounded-xl shadow-md w-full max-w-7xl mx-auto sm:p-6 lg:p-10 overflow-x-auto"
      >
        <Component user={finalUser} def={def} />
      </div>

      {/* Download Button */}
      <div className="flex justify-center sm:justify-end">
        <button
          onClick={() => handleDownloadPdf(selectedTemplate.id)}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-lg px-4 sm:px-6 py-2 rounded-lg shadow-md transition-all"
        >
          Download <span className="hidden sm:inline">as PDF</span>
        </button>
      </div>
    </div>
  );
};

export default Template;
