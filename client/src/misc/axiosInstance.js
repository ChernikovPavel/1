import axios from 'axios';
let accessToken = '';

const axiosInstance = axios.create(
  {
    baseURL: `${import.meta.env.VITE_BASE_URL}`
  }
);

export function setAccessToken(newToken) {
  accessToken = newToken;
}

axiosInstance.interceptors.request.use((config) => {
  config.withCredentials = true;
  if (!config.headers.Authorization) {
    config.headers.Authorization = accessToken;
  }
  return config;
});


axiosInstance.interceptors.response.use((config) => {
  
  return config
})
export default axiosInstance;
