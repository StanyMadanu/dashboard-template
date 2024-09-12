// src/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import authService from "./services/authService"; 

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = authService.getCurrentUser(); 
  console.log(element,"akashssssS")

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
