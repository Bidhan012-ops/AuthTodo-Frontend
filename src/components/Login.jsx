import React from 'react'
import { useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../store/userContext.jsx'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import ErrorComponent from './ErrorComponent.jsx';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const Login = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);
  const userCtx = useContext(UserContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value
    };
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      console.log(result);
      if (result.success) {
        console.log("User context before update:", userCtx);
        console.log("Result user data:", result.user);
        // alert("Login successful!");
        userCtx.setIsLoggedIn(true);
        userCtx.setAccessToken(result.accesstoken);
        userCtx.setUser(result.user);
        userCtx.setemail(result.user.email);
        localStorage.setItem("token", result.accesstoken);
        navigate('/dashboard');
      }
      else {
        // alert(`Login failed: ${result.message}`);
        setError(result.message);
      }
    }
    catch (err) {
      console.log("The error is ", err);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
      <div className="bg-white w-[90%] max-w-md p-8 rounded-2xl shadow-xl">
        <ErrorComponent error={error} />
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            ref={email}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Password */}
        <div className="relative mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            type={`${visible ? "text" : "password"}`}
            ref={password}
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
        {/* Login Button */}
        <button
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          onClick={handleLogin}
        >
          Login
        </button>

        {/* Extra Links */}
        <div className="mt-4 text-center text-sm text-gray-600">
          <p className="mb-1 cursor-pointer hover:text-indigo-600">
            <Link to="/forgotpass">Forgot password?</Link>
          </p>
          <p>
            Don’t have an account?{" "}
            <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
              <Link to="/signup"> Sign up</Link>
            </span>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Login
