import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/Auth";

export const RequireAuth = ({ children }) => {
    const Auth = useAuth();
    const location = useLocation()

  if (!Auth.username && !Auth.password) {
    return <Navigate to="/login" state={{path:location.pathname}} />;
  }

  return children;
};
