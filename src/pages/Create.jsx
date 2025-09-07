import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import A4Canvas from "../components/A4Canvas";
import Toolbar from "../components/Toolbar";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PortfolioContext } from "../context/PortfolioContext";

const Create = () => {
  const {handleAddText,handleAddImage,handleAddLink,handleTempDone,addBlockSignal, setAddBlockSignal,setBlocks} = useContext(PortfolioContext)
  return (
    <div className="p-4 bg-[#fcfbd4b8] min-h-screen w-full dark:bg-gray-800 dark:text-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-10">
        <h2 className="text-xl sm:text-2xl font-semibold">Create Template</h2>
        <button
          onClick={() => {
    handleTempDone();       
   
  }}
          className="bg-purple-500 text-white px-4 py-2 rounded w-full sm:w-auto"
        >
          Done
        </button>
      </div>

      {/* Toolbar + Canvas */}
      <div className="flex flex-col md:flex-row md:justify-start gap-6 mt-4">
        {/* Toolbar */}
        <div className="flex justify-center md:justify-start ">
            <div className="md:mt-20">
             <Toolbar
            addText={handleAddText}
            addImage={handleAddImage}
            addLink={handleAddLink}
          />
            </div>
         
        </div>

        {/* Canvas */}
        <div className="flex justify-center w-full">
          <DndProvider backend={HTML5Backend}>
            <A4Canvas addBlockSignal={addBlockSignal} />
          </DndProvider>
        </div>
      </div>
      <Link to='/' className="cursor-pointer sm:fixed right-4 text-white">Back to Home</Link>
    </div>
  );
};

export default Create;
