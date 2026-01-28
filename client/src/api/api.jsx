import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/", // backend base URL
  headers: { "Content-Type": "application/json" },
});

// Automatically attach token if logged in
API.interceptors.request.use((config) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (userInfo?.token) {
    config.headers.Authorization = `Bearer ${userInfo.token}`;
  }
  return config;
});

export default API;
