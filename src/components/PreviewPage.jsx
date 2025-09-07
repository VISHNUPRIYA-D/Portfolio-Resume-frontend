// src/components/PreviewPage.jsx
import React, { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const PreviewPage = React.forwardRef((props, ref) => {
  const { blocks, previewRef} = useContext(PortfolioContext);

  return (
    <div
      ref={previewRef}

      className="relative w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[400px] aspect-[210/297] bg-white overflow-hidden">
      {blocks.map((block) => (
        <div
          key={block.id}
          style={{ position: "absolute", left: block.x, top: block.y }}
        >
          {block.type === "text" && (
            <span className="text-black">{block.value}</span>
          )}
          {block.type === "link" && (
            <a
              href={block.value}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {block.value}
            </a>
          )}
          {block.type === "image" && (
            <img
              src={block.value}
              alt="user-uploaded"
              className="max-w-full max-h-full"
              style={{
                width:block.width || 200,
                height:block.height || "auto",
                objectFit:"contain",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
});

export default PreviewPage;
