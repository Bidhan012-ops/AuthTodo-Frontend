import React, { useRef, useState, useContext } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import UserContext from "../store/userContext";
import { Link, useNavigate } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const ChangePass = () => {
  const navigate = useNavigate();
  const [error, seterror] = useState("");
  const [visible, setVisible] = useState(false);
  const [cvisible, setcvisible] = useState(false);
  const { email } = useContext(UserContext);
  const userEmail = email;
  const newPassRef = useRef(null);
  const confirmPassRef = useRef(null);
  const handleOnclick = async () => {
    const newpassword = newPassRef.current.value;
    const confirmpassword = confirmPassRef.current.value;
    const data = {
      newpassword: newpassword,
      confirmpassword: confirmpassword
    }
    try {
      const responce = await fetch(`${BASE_URL}/users/resetPassword/${userEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await responce.json();
      if (result.success) {
        console.log("The pass is changed successfully");
        navigate('/login');
      }
      else {
        console.log("The passChange is unsuccessful");
        seterror(result.message);
      }
    }
    catch (err) {
      console.log("The error is ", err);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6">
        <ErrorComponent error={error} />
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Change Password
        </h2>

        <p className="text-sm text-gray-500 text-center mt-2 mb-6">
          Enter your new password below
        </p>

        {/* New Password */}
        <div className="mb-4 relative">
          <label className="block text-sm text-gray-600 mb-1">
            New Password
          </label>
          <input
            type={`${visible ? "text" : "password"}`}
            ref={newPassRef}
            placeholder="Enter password"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setVisible(!visible)}
            className="absolute right-2 top-9 text-gray-600"
          >
            {visible ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>

        {/* Confirm New Password */}
        <div className="mb-6 relative">
          <label className="block text-sm text-gray-600 mb-1">
            Confirm Password
          </label>
          <input
            type={`${cvisible ? "text" : "password"}`}
            ref={confirmPassRef}
            placeholder="Enter password"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setcvisible(!cvisible)}
            className="absolute right-2 top-9 text-gray-600"
          >
            {cvisible ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200" onClick={handleOnclick}>
          Update Password
        </button>
      </div>
    </div>
  );
};

export default ChangePass;
