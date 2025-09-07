const TemplateCard = ({ preview, onSelect, id, token, type }) => {
  return (
    <div
      onClick={() => onSelect(id, type)}
      className="group relative w-full h-64
                 rounded-2xl shadow-md overflow-hidden cursor-pointer sm:mb-7 
                 transform transition hover:scale-105 hover:shadow-xl bg-black"
    >
      {/* Preview Area */}
      <div
        className=" w-full h-[400px] sm:h-[600px] md:h-[700px] lg:h-[750px] 
                      bg-black flex items-center justify-center overflow-hidden"
      >
        {token ? (
          preview ? (
            <div className="w-full sm:w-full h-full flex items-center justify-center overflow-hidden">
              {/* Auto-fit preview */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="max-w-full max-h-full">
                  
                  {preview}</div>
              </div>
               {/* ✅ Desktop: less zoom, keep centered */}
              <div className="hidden md:flex absolute inset-0 items-center justify-center overflow-hidden">
                <div className="pointer-events-none transform-gpu origin-center 
                                scale-[0.6] lg:scale-[0.5] xl:scale-[0.28]">
                  {/* Frame for desktop preview */}
                  <div className="w-[1024px] h-[768px]">
                    {preview}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="m-auto text-2xl font-bold text-white">Welcome</div>
          )
        ) : (
          <div className="text-center text-white text-lg font-semibold px-2 flex items-center justify-center h-full">
            Please log in to preview this template
          </div>
        )}
      </div>

      {/* Overlay on Hover */}
      <div
        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
                      flex items-center justify-center transition"
      >
        <span
          className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md 
                         text-sm font-medium"
        >
          Select
        </span>
      </div>
    </div>
  );
};

export default TemplateCard;
