import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance"; // Adjust the path to your axios instance

export const getAllFaculties = createAsyncThunk(
  "all-faculty/get", // Action type
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Send GET request to fetch all faculties
      const { data } = await axiosInstance.get(`/faculty`, config);
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

export const getFacultyBySubject = createAsyncThunk();
