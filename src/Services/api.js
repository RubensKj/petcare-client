import axios from 'axios';
import { getToken } from "./auth";

const api = axios.create({
<<<<<<< HEAD
  baseURL: 'https://aw-petcare-api.herokuapp.com/api',
  // baseURL: process.env.REACT_APP_API_URL,
=======
  // baseURL: 'https://aw-petcare-api.herokuapp.com/api',
  baseURL: process.env.REACT_APP_API_URL,
>>>>>>> f0d70fdbfe30ceae5949e438e89e858698186304
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;