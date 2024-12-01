import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api", // Adjust baseURL for your backend
});

export const signUp = (data) => API.post("/signup", data);
export const login = (data) => API.post("/login", data);
export const fetchHealthData = () => API.get("/health");
export const fetchChats = () => API.get("/chats");
