import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance"; 

export const getAllnotes = createAsyncThunk(
  "/notes",  // Action type
  async ({page}, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Send GET request to fetch all subjects
      const { data } = await axiosInstance.get(`/notes?page=${page}`, config);  

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
