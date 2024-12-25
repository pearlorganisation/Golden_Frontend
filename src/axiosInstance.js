import axios from "axios";


let store;
export const injectStore = (_store) => {
  store = _store;
};


const baseURL ="http://localhost:5000/"
  // ? import.meta.env.VITE_APP_BACKEND_DEV_BASE_URL
  // : import.meta.env.VITE_APP_BACKEND_PROD_BASE_URL || ""; 

console.log("Base URL:", baseURL);


export const axiosInstance = axios.create({
  withCredentials: true,  
  baseURL,  
});


export default axiosInstance;