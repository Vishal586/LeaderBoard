import axios from 'axios';

const API_BASE = "https://leaderboard-xqxx.onrender.com/api";

export const fetchUsers = () => axios.get(`${API_BASE}/users`);
export const addUser = (name) => axios.post(`${API_BASE}/users`, { name });
export const claimPoints = (userId) => axios.post(`${API_BASE}/claim`, { userId });
export const getLeaderboard = () => axios.get(`${API_BASE}/users/leaderboard`);
export const getHistory = (userId) => axios.get(`${API_BASE}/users/history/${userId}`);
