import API from "./api";

// Auth
export const loginUser = (data) => API.post("/users/login", data);
export const registerUser = (data) => API.post("/users/register", data);

// Users
export const getUsers = () => API.get("/users"); // privileged only
export const getUserById = (id) => API.get(`/users/${id}`); // owner or privileged
export const createUser = (data) => API.post("/users", data); // privileged only
export const updateUser = (id, data) => API.put(`/users/${id}`, data); // owner or privileged
export const updateUserPassword = (id, data) => API.put(`/users/${id}/password`, data); // owner or privileged
export const deleteUser = (id) => API.delete(`/users/${id}`); // owner or privileged
