import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const Auth = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
     useEffect(() => {
        const login = JSON.parse(localStorage.getItem('login'));
        setIsLogin(login ); 
      }, []);
    return(
  <AuthContext.Provider value={{isLogin,setIsLogin}}>
    {children}
  </AuthContext.Provider>
    )
};
