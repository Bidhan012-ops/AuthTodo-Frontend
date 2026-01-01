import Header from "./header";
import Bidhan from "./input";
import Stask from "./stask";
import "../App.css"
import Messege from "./Error";
import { useEffect, useState, useContext } from "react";
import UserContext from "../store/userContext";
import { useSelector } from "react-redux";
import { setTodos, getTodos, deleteTodos } from "../services/todoservices";
import Logout from "./Logout";
function App() {
  const inputdate = useSelector((store) => store.input);
  const datedate = useSelector((store) => store.date);
  const [Itemlist, settodoitems] = useState([]);
  const { email } = useContext(UserContext); // Keeping email for display if needed, but not for services
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await getTodos(); // No email needed
        settodoitems(todos);
      } catch (error) {
        console.error("Failed to load todos", error);
      }
    };
    fetchTodos();
  }, []);
  const addtask = async (task, date, time) => {
    try {
      const newtodo = await setTodos({ task: task, date: date, time: time }); // No email needed
      console.log("This is in the addtask function", newtodo);
      let newlist = [...Itemlist, newtodo];
      settodoitems(newlist);
    } catch (error) {
      console.error("Failed to add task", error);
    }
  }
  let Deletetask = (id) => {
    let newlist = Itemlist.filter(val => {
      return val._id !== id;
    })
    deleteTodos(id);
    settodoitems(newlist);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-4 sm:py-8 px-3 sm:px-4">
      <div className="max-w-5xl mx-auto">
        <div className="container bg-white dark:bg-slate-900/80 dark:backdrop-blur-xl rounded-2xl shadow-2xl dark:shadow-slate-950/50 p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-slate-800">
          < Logout />
          <div className="text-center mb-6 sm:mb-8">
            <Header></Header>
          </div>
          <Bidhan addtask={addtask}></Bidhan>
          {Itemlist.length === 0 && <Messege></Messege>}
          {(inputdate === false || datedate == false) && (Itemlist.length !== 0) && <Messege></Messege>}
          <div className="mt-6 sm:mt-8">
            {Itemlist.length > 0 && (
              <div className="mb-4 sm:mb-6 px-2 sm:px-0">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-slate-100 mb-3 sm:mb-4">
                  Your Tasks ({Itemlist.length})
                </h2>
              </div>
            )}
            <Stask onclick={Deletetask} Itemlist={Itemlist} setTodos={settodoitems}></Stask>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;