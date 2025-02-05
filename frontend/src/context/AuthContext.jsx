import { createContext, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const loginUser = async (data) => {

    const response = await axios.post(
      "http://localhost:4000/api/login",
      data,
      {
        withCredentials: true,
      }
    );

    console.log(response.data);
    setUser(response.data);
    setIsAuth(true);

  };

  const registerUser = async (data)=>{
    const response = await axios.post("http://localhost:4000/api/register", data, {
        withCredentials: true,
    })
    console.log(response.data);

  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        isAuth,
        loginUser,
        registerUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
