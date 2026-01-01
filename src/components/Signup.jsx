import React from 'react';
import { useState } from 'react';
import {useRef} from 'react';
import { useNavigate,Link } from 'react-router-dom';
const BASE_URL = import.meta.env.VITE_BASE_URL;
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
const Signup = () => {
    const navigate=useNavigate();
     const [visible, setVisible] = useState(false);
    const [error, setError] = useState([]);
    const username=useRef();
    const email=useRef();
    const password=useRef();
    const handleFormdata=async(e)=>{
        e.preventDefault();
        const data={
            username:username.current.value,
            email:email.current.value,
            password:password.current.value
        };
        console.log(data);
        try{
         const response=await fetch(`${BASE_URL}/register`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        const result=await response.json();
        console.log(result);
        if(result.success){
            setError([]);
            alert("Registration successful! Please verify your email.");
            navigate('/varifyEmail');
        }
        else {
            alert(`Registration failed: ${result.message}`);
            setError(result.message);
        }
        }
        catch(err){
            console.log("The error is ",err);
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Create Account
        </h2>
        {error.length > 0 && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            <ul>
                {error.map((err, index) => (
                    <li key={index}>{err}</li>
                ))}
            </ul>
          </div>
        )}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Username
            </label>
            <input
              type="text"
              ref={username}
              placeholder="Enter username"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
                ref={email}
              placeholder="Enter email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            onClick={handleFormdata}
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
