import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const user = useSelector((value) => value.user);
  const location = useLocation();

  console.log(location);
  //    if user is not login or empty then show login
  if (!user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
  //   if user login then we will render the children prop/ components
};
