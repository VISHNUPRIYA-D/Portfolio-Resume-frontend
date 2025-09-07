import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import TemplateCard from "../components/TemplateCard";
import { PortfolioContext } from "../context/PortfolioContext";
import { Link } from "react-router-dom";


const Home = () => {
  const {   filterResumes,
    filterPortfolios,finalUser,def,onSelect,formData,token,portTemplate,switchType,setSwitchType } = useContext(PortfolioContext);


  return (
    <div className="bg-[#fcfbd4b8] h-screen overflow-auto w-full dark:bg-gray-800 dark:text-white">
      <div>
      
       <div className="fixed z-50">
          <Sidebar />
       </div>
       
        
        <div className="flex items-center gap-3">
          <Searchbar />
          {!token && (
            <Link
              to="/login"
              className="hidden sm:block bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600 transition"
            >
              Login
            </Link>
          )}

        </div>

        
        <div className="flex-1 p-3 sm:p-6 ml-0 sm:ml-60">
        

          
          <h1 className="text-xl sm:text-2xl font-bold mb-2 mt-2 sm:mb-6 sm:mt-6">Choose a Template</h1>
          <div className="flex gap-4">

             <h1 className={`my-3 cursor-pointer ${switchType === 'portfolio'? `text-gray-500`:''}`} onClick={()=>setSwitchType('portfolio')}>Portfolio designs</h1>
           <h1 className={`my-3 cursor-pointer ${switchType === 'resume'? `text-gray-500`:''}`}  onClick={()=>setSwitchType('resume')}>Resume templates</h1>

          </div>
          

          <div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              
            {switchType === "resume" ? (
  filterResumes.length > 0 ? (
    filterResumes.map((template) => (
      <TemplateCard
        key={template.id}
        id={template.id}
        type="resume"
        preview={<template.component user={finalUser} def={def} formData={formData} />}
        onSelect={onSelect}
        token={token}
      />
    ))
  ) : (
    <p className="absolute top-[50%] left-[50%] text-gray-400">No results found...</p>
  )
) : null}
           
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
             
               { switchType === 'portfolio' ?(
                filterPortfolios.length>0?(
 filterPortfolios.map((template) => (
              <TemplateCard 
                key={template.id}
                id={template.id}
                type="portfolio"
                preview={
                  
                    <template.component user={finalUser} def={def} formData = {formData}/>
                
                }
                onSelect = {onSelect}
                token={token}
                
              /> 
                )
               
            )):(<p className="absolute top-[50%] left-[50%] text-gray-400">No results found...</p>)):null}

            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
