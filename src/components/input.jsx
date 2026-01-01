import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux"
import { inputaction, dateaction, timeaction } from "../store/Index";
function Bidhan({ addtask }) {
  const dispatch = useDispatch();
  let [input, setinput] = useState("");
  const onhandlechange = (event) => {
    setinput(event.target.value);
  }
  let [date, setdate] = useState("");
  const onhandledate = (event) => {
    setdate(event.target.value);
  }
  let [time, settime] = useState("");
  const onhandletime = (event) => {
    settime(event.target.value);
  }
  const addbuttonhandler = () => {
    const isTaskValid = input.trim() !== "";
    const isDateValid = date.trim() !== "";
    const isTimeValid = time.trim() !== "";

    dispatch(inputaction.input(isTaskValid));
    dispatch(dateaction.date(isDateValid));
    dispatch(timeaction.time(time));

    if (isTaskValid && isDateValid && isTimeValid) {
      addtask(input, date, time);
      setinput("");
      setdate("");
      settime("");
    }
  }
  return (
    <div className="w-full max-w-4xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
        <input
          value={input}
          onChange={onhandlechange}
          type="text"
          placeholder="Enter your todo task here"
          className="flex-1 w-full px-4 py-3 sm:py-3 text-base rounded-xl border border-gray-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-indigo-500/20 transition-all text-gray-800 dark:text-slate-200 placeholder-gray-400 dark:placeholder-slate-500 bg-gray-50 dark:bg-slate-900/60"
        />
        <input
          value={date}
          onChange={onhandledate}
          type="date"
          className="w-full sm:w-auto px-4 py-3 text-base rounded-xl border border-gray-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-indigo-500/20 transition-all text-gray-800 dark:text-slate-200 bg-gray-50 dark:bg-slate-900/60"
        />
        <input
          value={time}
          onChange={onhandletime}
          type="time"
          className="w-full sm:w-auto px-4 py-3 text-base rounded-xl border border-gray-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-indigo-500/20 transition-all text-gray-800 dark:text-slate-200 bg-gray-50 dark:bg-slate-900/60"
        />
        <button
          onClick={() => addbuttonhandler()}
          type="button"
          className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 dark:from-indigo-600 dark:to-blue-600 dark:hover:from-indigo-500 dark:hover:to-blue-500 active:scale-95 text-white font-semibold rounded-xl shadow-lg hover:shadow-indigo-500/30 dark:shadow-indigo-900/40 transition-all duration-200 flex items-center justify-center gap-2 text-base sm:text-lg cursor-pointer"
        >
          <span>ADD</span>
          <IoIosAddCircleOutline className="text-xl sm:text-2xl" />
        </button>
      </div>
    </div>
  );
}
export default Bidhan;
