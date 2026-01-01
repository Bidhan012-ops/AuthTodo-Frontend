import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import EditItem from "./edititem";
import Itemhandler from "./Itemhandler";
import { updateTodos, getTodos } from "../services/todoservices";
const Item = ({ item, onclick, setTodos }) => {
  const [editMode, setEditMode] = useState(false);
  const handleEditdata = async (newitem) => {
    const data = await updateTodos(item._id, newitem);
    const fetchTodos = async () => {
      const todos = await getTodos();
      setTodos(todos);
      setEditMode(false);
    };
    fetchTodos();
    console.log("Edit clicked for item:", item);
    console.log("New item data:", newitem);
  }
  const handleEdit = () => {
    setEditMode(true);
  };
  return (
    <>
      <div className="w-full max-w-4xl mx-auto mb-4">
        <div className="bg-white dark:bg-slate-800/40 dark:backdrop-blur-md rounded-xl shadow-sm hover:shadow-md dark:shadow-none border border-gray-100 dark:border-slate-700/50 p-3 sm:p-4 border-l-4 border-l-blue-500 dark:border-l-indigo-500 transition-all duration-200">
          <div className="flex flex-col gap-2 sm:gap-4">
            {editMode && <EditItem item={item} onClose={handleEditdata} />}
            {/* First line: Task name, date, and time */}
            {!editMode && <Itemhandler item={item} handleEdit={handleEdit} onclick={onclick} />}
          </div>
        </div>
      </div>
    </>
  );
}
export default Item;