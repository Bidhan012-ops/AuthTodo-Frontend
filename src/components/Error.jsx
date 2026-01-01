import { useSelector } from "react-redux";

let Messege = () => {
    const inputdate = useSelector((store) => store.input);
    const datedate = useSelector((store) => store.date);
    let mess;
    let messageType = "info";
    if (inputdate === false && datedate === false) {
        mess = "Please enter both task and date";
        messageType = "error";
    }
    else if (inputdate === false && datedate === true) {
        mess = "Please enter the to-do item";
        messageType = "error";
    }
    else if (datedate === false && inputdate === true) {
        mess = "Please enter the date";
        messageType = "error";
    }
    else {
        mess = "Enjoy your day! 🎉";
        messageType = "success";
    }
    
    const bgColor = messageType === "error" 
        ? "bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-800/50" 
        : "bg-green-50 dark:bg-green-950/40 border-green-300 dark:border-green-800/50";
    const textColor = messageType === "error"
        ? "text-red-800 dark:text-red-200"
        : "text-green-800 dark:text-green-200";
    
    return (
        <div className={`w-full max-w-4xl mx-auto mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg border-2 ${bgColor} ${textColor} px-2 sm:px-4`}>
            <h2 className="text-center font-semibold text-sm sm:text-base md:text-lg">{mess}</h2>
        </div>
    );
}
export default Messege;