import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import { useState } from "react";
import { completeTodos } from "../services/todoservices";
const Itemhandler = ({ item, handleEdit, onclick }) => {
  const [Complete, setComplete] = useState(item.completed);
  const handleComplete = async () => {
    try {
      await completeTodos(item._id);
    } catch (error) {
      console.error("Error completing todo:", error);
    }
    setComplete(true);
  };
  return (
    <>
      <div
        className={`flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 ${Complete ? "line-through text-gray-400 dark:text-slate-400" : ""
          }`}
      >
        <p className="font-medium text-base sm:text-lg break-words flex-1 min-w-0 text-gray-800 dark:text-slate-200">
          {item.task}
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-100 dark:bg-slate-700/60 text-gray-700 dark:text-slate-300 rounded-full text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap border border-gray-200 dark:border-slate-600/50">
            {item.date}
          </span>
          {item.time && (
            <span className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-100 dark:bg-slate-700/60 text-gray-700 dark:text-slate-300 rounded-full text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap border border-gray-200 dark:border-slate-600/50">
              {item.time}
            </span>
          )}
        </div>
      </div>

      {/* Second line: Buttons */}
      <div className="flex flex-row gap-2 sm:gap-3">
        {!Complete && (
          <button
            onClick={handleEdit}
            type="button"
            className="flex-1 sm:flex-none px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-50 hover:bg-blue-100 dark:bg-blue-500/10 dark:hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm cursor-pointer"
          >
            <MdEdit className="text-sm sm:text-base" />
            <span>Edit</span>
          </button>
        )}
        <button
          type="button"
          onClick={handleComplete}
          disabled={Complete}
          className="flex-1 sm:flex-none px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm cursor-pointer"
        >
          <MdCheckCircle className="text-sm sm:text-base" />
          <span>{Complete ? "Completed" : "Complete"}</span>
        </button>
        <button
          onClick={() => onclick(item._id)}
          type="button"
          className="flex-1 sm:flex-none px-3 py-1.5 sm:px-4 sm:py-2 bg-rose-50 hover:bg-rose-100 dark:bg-rose-500/10 dark:hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm cursor-pointer"
        >
          <RiDeleteBin6Fill className="text-sm sm:text-base" />
          <span>Delete</span>
        </button>
      </div>
    </>
  );
};
export default Itemhandler;
