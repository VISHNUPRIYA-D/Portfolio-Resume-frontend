import React, { useState } from "react";
import { useDrag } from "react-dnd";

const Block = ({ block, moveBlock }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "block",
    item: { id: block.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [isFocused, setIsFocused] = useState(false);

  // Show purple border if empty or focused
  const showPurpleBorder = isFocused || !block.value;

  return (
    <div
      ref={drag}
      style={{
        position: "absolute",
        left: block.x,
        top: block.y,
        padding: "4px 8px",
        border: showPurpleBorder ? "1px solid purple" : "none",
        backgroundColor: "white",
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        minWidth: "80px",
        textAlign: "center",
      }}
    >
      {(block.type === "text" || block.type === "link") && (
        <div
          contentEditable
          suppressContentEditableWarning
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            moveBlock(block.id, { value: e.target.innerText });
          }}
          style={{
            color: block.type === "link" ? "#3b82f6" : "black",
            border: "none",
            outline: "none",
            cursor: "text",
          }}
        >
          {block.value}
        </div>
      )}

      {block.type === "image" && (
        <img
          src={block.value}
          alt=""
          style={{ position: "absolute",
      top: block.y,
      left: block.x,
      width: block.width || 200,
      height: block.height || "auto",
      objectFit: "contain",}}
        />
      )}
    </div>
  );
};

export default Block;
