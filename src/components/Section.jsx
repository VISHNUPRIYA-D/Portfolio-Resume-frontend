import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import { PiArrowElbowDownLeft } from "react-icons/pi";
import { FaAngleDown, FaPlus, FaTimes } from "react-icons/fa";

// Section Component (Reusable & Responsive)
const Section = ({ title, items = [], renderItem }) => {
  const { setForm, openSection, setOpenSection, handleDelete } =
    useContext(PortfolioContext);

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white shadow rounded-xl p-4 sm:p-6">
      {/* Title + Add button */}
      <div className="flex flex-row justify-between sm:items-center mb-4 gap-2">
        <h2 className="text-base sm:text-xl font-bold">{title}</h2>

        <FaAngleDown
  className={`transition-transform ${
    items.length === 0
      ? "text-gray-400 cursor-not-allowed"
      : "hover:cursor-pointer"
  } ${openSection[title] ? "rotate-180" : ""}`}
  onClick={() => {
    if (items.length > 0) {
      setOpenSection((prev) => ({ ...prev, [title]: !prev[title] }));
    }
  }}
/>
      </div>

      {/* Items */}
      {items.length > 0 ? (
        openSection[title] && (
          <div className="space-y-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="p-2 sm:p-3 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="text-xs sm:text-sm">
                  <FaTimes
                    className="absolute mt-[-15px] right-10 sm:right-20"
                    onClick={() =>
                      setForm({
                        open: true,
                        section: title.toLowerCase(),
                        item,
                        mode: "delete",
                      })
                    }
                  />

                  {renderItem(item)}
                </div>

                <button
                  className="sm:mt-4 px-2 py-1 text-xs sm:text-sm bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-500"
                  onClick={() =>
                    setForm({
                      open: true,
                      section: title.toLowerCase(),
                      item,
                      mode: "edit",
                    })
                  }
                >
                  Edit
                </button>
              </div>
            ))}
            <div className="flex justify-end">
              <button
                className="px-3 sm:px-4 py-1 w-14 text-xs sm:text-sm bg-blue-600 text-white rounded hover:bg-blue-700 right-3"
                onClick={() =>
                  setForm({
                    open: true,
                    section: title.toLowerCase(),
                    item: null,
                    mode: "add",
                  })
                }
              >
                Add
              </button>
            </div>
          </div>
        )
      ) : (
        <div className="flex justify-between">
          <p className="text-gray-500 italic text-sm sm:text-base">
            No {title.toLowerCase()} added yet.
          </p>
          <button
            className="px-3 sm:px-4 py-1 w-14 text-xs sm:text-sm bg-blue-600 text-white rounded hover:bg-blue-700 right-3"
            onClick={() =>
              setForm({
                open: true,
                section: title.toLowerCase(),
                item: null,
                mode: "add",
              })
            }
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
};
export default Section;
