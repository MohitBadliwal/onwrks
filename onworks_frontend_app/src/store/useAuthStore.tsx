import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  email: string;
  setEmail: (email: string) => void;
  userType: "customer" | "dealer";
  setUserType: (userType: "customer" | "dealer") => void;
  userIdType: "National" | "Resident";
  setUserIdType: (userType: "National" | "Resident") => void;
  clearAuth: () => void;
  otp: string;
  setOtp: (otp: string) => void;
  token: string | null;
  setToken: (token: string | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      email: "",
      setEmail: (email) => set({ email }),
      userType: "customer",
      setUserType: (userType) => set({ userType }),
      userIdType: "National",
      setUserIdType: (userIdType) => set({ userIdType }),
      clearAuth: () => set({ email: "", userType: "customer" }),
      otp: "",
      setOtp: (otp) => set({ otp }),
      token: 'sjhaha',
      setToken: (token) => set({ token }),
    }),
    {
      name: "auth-storage",
    }
  )
);
