"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { api } from "@/services/api"; // Importa a instância do Axios
import { useRouter } from "next/navigation"; // Para redirecionar após login

export type UserProps = {
  id: string;
  name: string;
  email: string;
  token: string;
};

type AuthContextType = {
  user: UserProps | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const router = useRouter();

  // Função para login
  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/login", { email, password });
      const { user, token } = response.data;

      api.defaults.headers.Authorization = `Bearer ${token}`;
      setUser({ ...user, token });
      localStorage.setItem("user", JSON.stringify({ ...user, token }));

      router.push("/home");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erro ao fazer login:", error.message);
        throw new Error(error.message);
      } else if (
        typeof error === "object" &&
        error !== null &&
        "response" in error
      ) {
        const axiosError = error as {
          response: { data?: { message?: string } };
        };
        console.error(
          "Erro ao fazer login:",
          axiosError.response.data?.message || "Erro desconhecido"
        );
        throw new Error(
          axiosError.response.data?.message || "Erro ao fazer login"
        );
      } else {
        console.error("Erro desconhecido ao fazer login");
        throw new Error("Erro ao fazer login");
      }
    }
  };

  // Função para cadastro
  const register = async (name: string, email: string, password: string) => {
    try {
      await api.post("/createUser", { name, email, password });
      await login(email, password);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erro ao fazer cadastro:", error.message);
        throw new Error(error.message);
      } else if (
        typeof error === "object" &&
        error !== null &&
        "response" in error
      ) {
        const axiosError = error as {
          response: { data?: { message?: string } };
        };
        console.error(
          "Erro ao fazer cadastro:",
          axiosError.response.data?.message || "Erro desconhecido"
        );
        throw new Error(
          axiosError.response.data?.message || "Erro ao fazer cadastro"
        );
      } else {
        console.error("Erro desconhecido ao fazer cadastro");
        throw new Error("Erro ao fazer cadastro");
      }
    }
  };

  // Função para logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    api.defaults.headers.Authorization = ""; // Remove o token do Axios
    router.push("/login"); // Redireciona para a página de login
  };

  // Recupera o usuário do localStorage ao carregar o app
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      api.defaults.headers.Authorization = `Bearer ${parsedUser.token}`;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
