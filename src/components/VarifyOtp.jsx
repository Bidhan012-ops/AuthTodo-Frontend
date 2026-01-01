import React, { useRef, useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../store/userContext";
import ErrorComponent from "./ErrorComponent";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const Verifyotp = () => {
  const otpRef = useRef(null);
  const navigate = useNavigate();
  const [error, seterror] = useState([]);
  const { email } = useContext(UserContext);
  const userEmail = email;
  const handleVerify = async () => {
    const otp = otpRef.current.value;
    console.log("Entered OTP:", otp);
    seterror([]); // Clear previous errors on new attempt
    try {
      const responce = await fetch(`${BASE_URL}/users/varifyOtp/${userEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ otp })
      });
      const result = await responce.json();
      if (result.success) {
        console.log("The Otp varified successfully");
        navigate('/changePassword');
      }
      else {
        console.log("The login is unsuccessful");
        // Replace errors instead of appending to avoid duplicates
        seterror([result.message]);
      }
    }
    catch (err) {
      console.log("The error is ", err);
      seterror(["An error occurred. Please try again."]);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6">
        <ErrorComponent error={error} />
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Verify OTP
        </h2>

        <p className="text-sm text-gray-500 text-center mt-2 mb-6">
          Enter the OTP sent to your email
        </p>

        {/* OTP Input */}
        <input
          type="text"
          ref={otpRef}
          placeholder="Enter 6-digit OTP"
          maxLength={6}
          className="w-full text-center tracking-widest text-lg px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default Verifyotp;
