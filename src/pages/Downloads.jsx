import React, { useContext } from 'react'
import TemplateCard from '../components/TemplateCard'
import Sidebar from '../components/Sidebar'
import { PortfolioContext } from '../context/PortfolioContext'

const Downloads = () => {
    const {saveDownload,onSelect,token } = useContext(PortfolioContext);

    
    
  return (
   <div className="bg-[#fcfbd4b8] min-h-screen w-full dark:bg-gray-800 dark:text-white">      
          <Sidebar />
       {!saveDownload.length && (
      <p className='text-2xl sm:ml-48'>No Downloads yet</p>
       )}
        {saveDownload?.length > 0 && saveDownload.some((t) => t.downloaded) && (
            <div className='sm:ml-48 bg-fixed mx-4'>
              <h2 className="text-xl sm:text-2xl font-bold  mb-6 pt-16 ">
                Downloaded Templates
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {saveDownload
                  .filter((t) => t.downloaded)
                  .map((saved) => (
                    <TemplateCard
                      key={`saved-${saved.id}`}
                      id={saved.id}
                      preview={
                        <div className=''>
                           {saved.thumbnail ? (
            <img
              src={saved.thumbnail}
              alt={saved.filename}
              className="rounded shadow"
            />
          ) : (
            <div className="flex items-center justify-center bg-gray-700 text-white rounded h-40">
              <span>{saved.filename}</span>
            </div>
          )}
                        </div>
                      }
                      onSelect={onSelect}
                      token={token}
                    />
                  ))}
              </div>
            </div>
          )}
    </div>
  )
}

export default Downloads;