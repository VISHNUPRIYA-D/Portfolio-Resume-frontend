import React, { useState, useEffect, useContext } from "react";
import { useDrop } from "react-dnd";
import Block from "./Block";
import { PortfolioContext } from "../context/PortfolioContext";

const A4Canvas = ({ addBlockSignal }) => {
  const {blocks, setBlocks} = useContext(PortfolioContext);

  const [, drop] = useDrop({
    accept: "block",
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const block = blocks.find((b) => b.id === item.id);
      if(!block)return;
      const updatedBlocks = blocks.map((b) =>
        b.id === item.id
          ? { ...b, x: block.x + delta.x, y: block.y + delta.y }
          : b
      );
      setBlocks(updatedBlocks);
    },
  });

  const addBlock = (type, file) => {
    const newBlock = {
      id: Date.now(),
      type,
      value:
        type === "text"
          ? ""
          : type === "image"
          ? file
            ? URL.createObjectURL(file)
            : ""
          : "", // link
      x: 50,
      y: 50,
       width: type === "image" ? 200 : undefined, // default width for image
    height: type === "image" ? 200 : undefined,
    };
    setBlocks((prev) => [...prev, newBlock]);
  };

  // Listen for toolbar signals
  useEffect(() => {
    if (!addBlockSignal) return;
    if (addBlockSignal.type === "image") {
      // Open file picker
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) addBlock("image", file);
      };
      input.click();
    } else {
      addBlock(addBlockSignal.type);
    }
  }, [addBlockSignal]);

  const moveBlock = (id, changes) => {
    setBlocks(blocks.map((b) => (b.id === id ? { ...b, ...changes } : b)));
  };

  const saveTemplate = () => {
    localStorage.setItem("templateBlocks", JSON.stringify(blocks));
    alert("Template saved!");
  };

  return (
    <div className="flex justify-center my-4">
      <div
        ref={drop}
        className="w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[400px] aspect-[210/297] border-2 border-black bg-white relative overflow-hidden"
      >
        {blocks.map((block) => (
          <Block key={block.id} block={block} moveBlock={moveBlock} />
        ))}
      </div>

      
    </div>
  );
};

export default A4Canvas;
