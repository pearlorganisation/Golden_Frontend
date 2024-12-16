import axios from "axios";

// This code is used to access the redux store in this file.
let store;
export const injectStore = (_store) => {
  store = _store;
};

// Set the base URL based on environment variables
const baseURL ="http://localhost:5000/"
  // ? import.meta.env.VITE_APP_BACKEND_DEV_BASE_URL
  // : import.meta.env.VITE_APP_BACKEND_PROD_BASE_URL || ""; // Fallback to an empty string or prod URL

console.log("Base URL:", baseURL);

// Creating a new axios instance
export const axiosInstance = axios.create({
  withCredentials: true,  // Set this if you're handling cookies or sessions
  baseURL,  // Set the baseURL from environment variables
});

// Default export the axios instance for use in other files
export default axiosInstance;