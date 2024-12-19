// src/components/ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Use useSelector to access Redux state

const ProtectedRoute = ({ children }) => {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn); // Access the isUserLoggedIn state from Redux store

  if (!isUserLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
