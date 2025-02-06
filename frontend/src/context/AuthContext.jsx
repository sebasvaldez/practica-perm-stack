import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "../api/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const loginUser = async (data) => {
    try {
      const response = await axios.post("/login", data);
      setUser(response.data);
      setIsAuth(true);

      return response.data;
    } catch (error) {
      error.response.data.error
        ? setError(error.response.data.error)
        : error.response.data.message
        ? setError([error.response.data.message])
        : setError("Error desconocido");
      setIsAuth(false);
    }
  };

  const registerUser = async (data) => {
    try {
      const response = await axios.post("/register", data);
      return response.data;
    } catch (error) {
      error.response.data.error
        ? setError(error.response.data.error)
        : error.response.data.message
        ? setError([error.response.data.message])
        : setError("Error desconocido");
      setIsAuth(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 4000);
  }, [error]);

  useEffect(() => {
    if (Cookies.get("token")) {
      axios
        .get("/profile")
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
          setIsAuth(true);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setUser(null);
          setIsAuth(false);
        });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        isAuth,
        loginUser,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
