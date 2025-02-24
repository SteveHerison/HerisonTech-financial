import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserContextProps {
  user: User | null;
  users: User[] | null;
  token: string | null;
  createUser: (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  getUsers: (name?: string, email?: string) => Promise<void>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(
    typeof window !== "undefined" ? localStorage.getItem("token") : null
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const createUser = async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    try {
      const response = await fetch("http://localhost:3001/createUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, confirmPassword }),
      });

      const result = await response.json();
      if (response.ok) {
        setUsers((prev) => (prev ? [...prev, result.user] : [result.user]));
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error("Erro ao criar usuário:", err);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        setToken(result.token);
        setUser({ id: result.user.id, name: result.user.name, email });
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error("Erro ao fazer login:", err);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  const getUsers = async (name?: string, email?: string) => {
    try {
      const queryParams = new URLSearchParams();
      if (name) queryParams.append("name", name);
      if (email) queryParams.append("email", email);

      const response = await fetch(
        `http://localhost:3001/getUsers?${queryParams.toString()}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const result = await response.json();
      if (response.ok) {
        setUsers(result);
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error("Erro ao buscar usuários:", err);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, users, token, createUser, login, logout, getUsers }}
    >
      {children}
    </UserContext.Provider>
  );
};
