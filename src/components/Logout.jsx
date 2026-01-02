import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../store/userContext";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Logout = () => {
  const navigate = useNavigate();
  const {
    accessToken,
    setIsLoggedIn,
    setAccessToken,
    setUser,
    setemail,
  } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${BASE_URL}/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const result = await response.json();
      console.log("Logout response:", result);
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      // Always clear frontend state
      setIsLoggedIn(false);
      setAccessToken(null);
      setUser({});
      setemail("");

      localStorage.clear();
      sessionStorage.clear();

      navigate("/login");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition cursor-pointer"
    >
      Logout
    </button>
  );
};

export default Logout;
