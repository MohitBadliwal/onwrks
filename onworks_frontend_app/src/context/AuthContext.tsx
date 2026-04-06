/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import { publicApi } from "../services/api";

interface AuthContextType {
  user: any | null;
  isAuthenticated: boolean;
  loading: boolean;
  registerLogin: (credentials: RegisterLoginRequest) => Promise<string>;
  login: (credentials: LoginRequest) => Promise<string>;
  logout: () => void;
  updateUser: (user: any) => void;
}
export interface LoginRequest {
  email?: string;
  password: string;
}

export interface RegisterLoginRequest {
  name?: string;
  password?: string;
  email?: string;
  
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

   useEffect(() => {
    if (typeof window !== "undefined") {
      const token = sessionStorage.getItem("token");
      if (token) {
        setIsAuthenticated(true);
      }
      setLoading(false);
    }
  }, []);

  const login = async (credentials: LoginRequest): Promise<string> => {
    try {
      const res = await publicApi.post("/login", credentials);
      sessionStorage.setItem("token", res.data);
      setIsAuthenticated(true);
      router.push("/home");
      return res.data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const registerLogin = async (credentials: RegisterLoginRequest): Promise<string> => {
    try {
      const res = await publicApi.post("/register", credentials);
      router.push("/login"); 
      return res.data;
    } catch (error) {
      console.error("RegisterLogin error:", error);
      throw error;
    }
  };

  const logout = () => {
    sessionStorage.removeItem("app:objectTableField");
    sessionStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
    router.push("/login");
  };

  const updateUser = (newUser: any) => {
    setUser(newUser);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, loading, registerLogin , login, logout, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
