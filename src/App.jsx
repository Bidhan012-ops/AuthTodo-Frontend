import React from 'react'
import Signup from './components/Signup.jsx'
import './App.css'
import { createBrowserRouter, Router ,RouterProvider} from 'react-router-dom'
import VarifyEmail from './components/Varify.jsx'
import EmailVarifier from './components/emailVarifier.jsx'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import ForgotPass from './components/ForgotPass.jsx'
import ChangePass from './components/ChangePass.jsx'
import Varifyotp from './components/VarifyOtp.jsx'
import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {
  const router=createBrowserRouter([
    {
      path: "/",
      element: <Signup />
    },{
      path:"/varifyEmail",
      element: <VarifyEmail/>
    },{
      path:"/varify/:token",
      element:<EmailVarifier/>
    },{
      path:"/login",
      element:<Login/>
    },{
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    )
  },{
      path:"/forgotpass",
      element:<ForgotPass/>
    },{
      path:"/changePassword",
      element:<ChangePass/>
    },{
      path:"/varifyOtp",
      element:<Varifyotp/>
    }
  ])
  return (
    <RouterProvider router={router}>
      <div>
      </div>
    </RouterProvider>
  )
}

export default App
