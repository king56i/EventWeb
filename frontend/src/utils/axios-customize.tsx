import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Accept': 'application/json',
    "Content-Type": "multipart/form-data",
    
  },
  withCredentials: true,
});
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
     // Lấy token CSRF từ cookie (Laravel gửi token này vào cookie XSRF-TOKEN)
    const csrfToken = document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN='));
    if (csrfToken) {
      config.headers['X-XSRF-TOKEN'] = csrfToken.split('=')[1];
    }
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;
