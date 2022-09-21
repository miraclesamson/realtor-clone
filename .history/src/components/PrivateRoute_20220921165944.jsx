import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import useAuthStatus from "../hooks/useAuthStatus";

export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return (
    <div className="flex justify-center align-center
    
    <spinner />);
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}
