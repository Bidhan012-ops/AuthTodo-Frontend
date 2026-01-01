import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
const EditItem = ({ item, onClose }) => {
  const [input, setInput] = useState(item.task);
  const [date, setDate] = useState(item.date);
  const [time, setTime] = useState(item.time);

  const onhandlechange = (event) => {
    setInput(event.target.value);
  };
  const onhandledate = (event) => {
    setDate(event.target.value);
  };
  const onhandletime = (event) => {
    setTime(event.target.value);
  };

  const editbuttonhandler = () => {
    // Handle edit logic here
    onClose({ task: input, date: date, time: time });
  };

return (
    <div className="w-full max-w-4xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
        <input 
          value={input} 
          onChange={onhandlechange} 
          type="text" 
          placeholder="Enter your todo task here" 
          className="flex-1 w-full px-4 py-3 sm:py-3 text-base rounded-lg border-2 border-gray-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-500/30 transition-all text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-400 bg-white dark:bg-slate-700/50"
        />
        <input 
          value={date} 
          onChange={onhandledate} 
          type="date" 
          className="w-full sm:w-auto px-4 py-3 text-base rounded-lg border-2 border-gray-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-500/30 transition-all text-gray-800 dark:text-slate-100 bg-white dark:bg-slate-700/50"
        />
        <input 
          value={time} 
          onChange={onhandletime} 
          type="time" 
          className="w-full sm:w-auto px-4 py-3 text-base rounded-lg border-2 border-gray-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-500/30 transition-all text-gray-800 dark:text-slate-100 bg-white dark:bg-slate-700/50"
        />
        <button 
          onClick={() => editbuttonhandler()} 
          type="button" 
          className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-500 dark:hover:to-blue-600 active:from-blue-700 active:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl dark:shadow-blue-900/30 dark:hover:shadow-blue-900/50 transition-all duration-200 flex items-center justify-center gap-2 text-base sm:text-lg cursor-pointer"
        >
          <span>Done</span>
          <IoIosAddCircleOutline className="text-xl sm:text-2xl" />
        </button>
      </div>
    </div>
  );
}
export default EditItem;