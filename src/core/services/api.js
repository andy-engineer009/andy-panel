import axios from 'axios';

const API = axios.create({
  baseURL: 'https://dummyjson.com/', // 🔁 Replace with your actual API base URL
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export const getData = (url) => API.get(url);
export const postData = (url, body) => API.post(url, body);
export const updateData = (url, id, body) => API.put(`${url}/${id}`, body);
export const deleteData = (url, id) => API.delete(`${url}/${id}`);
