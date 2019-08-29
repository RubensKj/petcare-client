import axios from 'axios';
import { getToken } from "./auth";

const api = axios.create({
  //baseURL: 'http://192.168.25.17:9000/api',
  baseURL: 'https://aw-petcare-api.herokuapp.com/api',
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