import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";  // Adjust the path to your axios instance

export const getAllnotes = createAsyncThunk(
  "/notes",  // Action type
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Send GET request to fetch all subjects
      const { data } = await axiosInstance.get(`/notes`, config);  // Adjust endpoint for fetching all subjects

      return data; 
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
