import { createContext, useState, useEffect } from "react";

const UserContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => { },
  accessToken: null,
  setAccessToken: () => { },
  user: {},
  setUser: () => { },
  email: "",
  setemail: () => { },
});

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [accessToken, setAccessToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState({});
  const [email, setemail] = useState(localStorage.getItem("resetEmail") || "");

  useEffect(() => {
    if (email) {
      localStorage.setItem("resetEmail", email);
    }
  }, [email]);
  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        accessToken,
        setAccessToken,
        user,
        setUser,
        email,
        setemail
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
