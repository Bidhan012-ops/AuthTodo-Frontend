import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../store/userContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(UserContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
