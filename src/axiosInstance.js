/* eslint-disable no-unused-vars */
import axios from "axios";

let store;
export const injectStore = (_store) => {
  store = _store;
};

const baseURL =
  import.meta.env.VITE_ENV === "development"
    ? import.meta.env.VITE_APP_BACKEND_DEV_BASE_URL
    : import.meta.env.VITE_APP_BACKEND_PROD_BASE_URL || "";

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL,
});

export default axiosInstance;
