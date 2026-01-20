import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

export const registerUser = (data) => axios.post(API_URL + "register", data);
export const loginUser = (data) => axios.post(API_URL + "login", data);
export const getUsers = (token) =>
  axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const getUserById = (id, token) => axios.get(`${API_URL}${id}`, { headers: { Authorization: `Bearer ${token}` } });
export const createUser = (data, token) => axios.post(API_URL, data, { headers: { Authorization: `Bearer ${token}` } });
export const updateUser = (id, data, token) => axios.put(`${API_URL}${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deleteUser = (id, token) => axios.delete(`${API_URL}${id}`, { headers: { Authorization: `Bearer ${token}` } });
