import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate=useNavigate();
  const login = JSON.parse(localStorage.getItem("login"));
  
  
  useEffect(() => {
    if (!login) {
      navigate('/login')
     }
   
  }, [login,navigate])
  
 
  return <>{children}</>;
};

export default ProtectedRoute;
