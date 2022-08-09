import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

// check user is authenticated
// if yes navigate to last page
// else navigate to login page

const ReqAuth = ({ children }) => {
  const location = useLocation();
  const auth = useSelector((store) => store.AuthReducer.isAuth);
  // const commingFrom = location.state?.from?.pathname || "/";
  console.log("reqAuth",auth)

  if (auth===false) {
    <Navigate to="/login" state={{ from: location }} replace />;
  } 
  // else if(auth) return <Navigate to={commingFrom} state={{ from: location }} replace />

  return children;
};

export default ReqAuth;
