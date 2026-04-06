import axios, { AxiosInstance } from "axios";
import https from "https";
import { showToast, updateToast } from "../utils/toastHelper";

const isDev = process.env.NODE_ENV !== "production";

const httpsAgent =
  typeof window === "undefined" && isDev
    ? new https.Agent({ rejectUnauthorized: false })
    : undefined;

const BASE_URL = isDev
  ? "http://localhost:8000/api/auth/" // ✅ your local backend
  : "";

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  httpsAgent,
});

// 🔐 Request Interceptor (Attach Token)
api.interceptors.request.use((config: any) => {
  if (typeof window !== "undefined") {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// 🔁 Response Interceptor (Handle 401)
let isRedirecting = false;
let logoutInterval: NodeJS.Timeout | null = null;

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && !isRedirecting) {
      isRedirecting = true;

      if (typeof window !== "undefined") {
        let count = 5;

        const id = showToast({
          title: "Session expired!",
          description: `You will be logged out in ${count} seconds...`,
          variant: "warning",
          duration: 7000,
        });

        logoutInterval = setInterval(() => {
          count--;

          updateToast(id, {
            description: `You will be logged out in ${count} seconds...`,
          });

          if (count <= 0) {
            if (logoutInterval) clearInterval(logoutInterval);

            updateToast(id, {
              title: "Logging out...",
              description: "Redirecting to login page...",
              variant: "error",
            });

            setTimeout(() => {
              sessionStorage.clear();
              window.location.replace("/login");
            }, 2000);
          }
        }, 1000);
      }
    }

    return Promise.reject(error);
  }
);

// 🌍 Public API (no auth)
export const publicApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  httpsAgent,
});

export default api;