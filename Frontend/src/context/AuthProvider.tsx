import { createContext, useState, useEffect, ReactNode } from "react";
import axiosClient from "../axiosClient";

type ChildProps = {
  children: ReactNode;
};

interface CurrentUserContextType {
  logout: (email: string, password: string) => void;
  user: {
    email: null | string;
    password: null | string;
  };
  login: (email: string, password: string) => void;
}

export const AuthContext = createContext<CurrentUserContextType | null>(null);

function AuthProvider({ children }: ChildProps) {
  const [user, setUser] = useState<{
    email: null | string;
    password: null | string;
  }>({ email: null, password: null });

  useEffect(() => {
    axiosClient
      .get("/users/profile")
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        setUser({ email: null, password: null });
      });
  }, []);

  const login = (email: string, password: string) => {
    axiosClient
      .post("/auth/login", {
        email,
        password,
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        setUser({ email: null, password: null });
      });
  };

  const logout = () => {
    axiosClient.get("/auth/logout").then((response) => {
      setUser({ email: null, password: null });
    });
  };

  return (
    <AuthContext.Provider value={{ logout, user, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
