import React, { useRef, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../store/userContext";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import ErrorComponent from "./ErrorComponent";
const ForgotPass = () => {
  const navigate = useNavigate();
  const usercontest = useContext(UserContext);
  const emailref = useRef(null);
  const [error, seterror] = useState("");
  const handleonclick = async () => {
    const email = emailref.current.value;
    try {
      const response = await fetch(`${BASE_URL}/users/forgetPassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      const result = await response.json();
      console.log(result);
      if (result.success) {
        alert("OTP sent successfully!");
        usercontest.setemail(email);
        navigate("/Varifyotp")

      } else {
        alert(`Failed to send OTP: ${result.message}`);
        seterror(result.message);
      }
    } catch (err) {
      console.log("Error sending OTP:", err);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6">
        <ErrorComponent error={error} />
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Forgot Password
        </h2>

        <p className="text-sm text-gray-500 text-center mt-2 mb-6">
          Enter your registered email to receive a reset OTP
        </p>

        <input
          type="email"
          ref={emailref}
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200 cursor-pointer"
          onClick={handleonclick}
        >
          Send OTP
        </button>
      </div>
    </div>


  );
};

export default ForgotPass;
