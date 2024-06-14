import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Corrected import

const ProtectedRoute = ({ component: Component }) => {
  const token = localStorage.getItem("token");
  let isAuthenticated = false;

  try {
    const decoded = jwtDecode(token);
    if (decoded.exp * 1000 > Date.now()) {
      isAuthenticated = true;
    }
  } catch (err) {
    isAuthenticated = false;
  }

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
