import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // TODO backend URL in prod
  // withCredentials: true, // TODO if using cookies/auth
});

// TODO Global axios defaults
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// TODO interceptors
// Add Authorization token to every request

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token'); // or get it from context
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// Centralized error logging & 401 handling

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       console.warn('Unauthorized, maybe redirect to login page?');
//       // Optionally: clear token and redirect
//       // localStorage.removeItem('token');
//       // window.location.href = '/login';
//     }
//
//     // Log and propagate error
//     console.error('API Error:', error.response?.data || error.message);
//     return Promise.reject(error);
//   }
// );

export default api;
