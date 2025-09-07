import React from "react";

const Toolbar = ({ addText, addImage, addLink }) => {
  return (
    <div className="flex gap-2 md:flex-col mb-4 bg-[#fcfbd4b8] w-fit dark: bg-slate-400 dark:text-white p-4 rounded-2xl sm:top-24 ">
        <p className="mt-1">Tools</p>
      <button
        onClick={addText}
        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-400"
      >
        Text
      </button>
      <br />
      <button
        onClick={addImage}
        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-400"
      >
        Image
      </button>
      <br />
      <button
        onClick={addLink}
        className="bg-purple-500 text-white px-2 py-1 rounded hover:bg-purple-400"
      >
        Link
      </button>
    </div>
  );
};

export default Toolbar;
