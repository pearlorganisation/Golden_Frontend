import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";


export const registerUser = createAsyncThunk(
    "v1/auth/register",
    async ({ name, email, phoneNumber, password }, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const { data } = await axiosInstance.post(
          "v1/auth/register",
          { name, email,  phoneNumber,password },
          config
        );
  
        console.log("Register Data", data);
        toast.success("Mail is sent to your email!"); // Show success toast
        return data;
      } catch (error) {
        // return custom error message from backend if present
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );
  


  export const userLogin = createAsyncThunk(
    "v1/auth/login",
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const { data } = await axiosInstance.post(
          "v1/auth/login", // No need to repeat backendURL
          { email, password },
          config
        );
  
        // store user's token in local storage
        console.log("login data", data);
        localStorage.setItem("isLoggedIn", true);
  
        return data.data;
      } catch (error) {
        console.log("Error", error);
        // return custom error message from API if any
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );
  export const getUserProfile = createAsyncThunk(
    "v1/auth/profile",
    async (_, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
  
        // Send GET request to fetch user profile
        const { data } = await axiosInstance.get(`/auth/profile`, config);
  
        return data; // Return the user profile data
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );


  export const userLogout = createAsyncThunk(
    "v1/auth/logout",
    async (_, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        await axiosInstance.post(`/auth/logout`, {}, config); // No need to capture `data`
        return "Logout successful"; // Optional success message
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );
  