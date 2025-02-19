"use client";
import { useContext, useState } from "react";
import { createContext } from "react";

export type UserProps = {
  name: string;
  email: string;
  password: string;
  token: string;
};

type AuthContextType = {
  user: UserProps | null;
  login: (user: UserProps) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps | null>(null);

  const login = (user: UserProps) => {
    setUser(user);

    console.log(user);
  };

  const logout = () => {
    console.log("logout");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthContext, AuthProvider, useAuth };
