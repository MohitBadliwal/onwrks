import api from "./api";

// Register API
export const registerUser = (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return api.post("auth/register", data);
};

// Login API
export const loginUser = (data: {
  email: string;
  password: string;
}) => {
  return api.post("auth/login", data);
};