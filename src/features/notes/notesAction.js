import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";

export const getAllnotes = createAsyncThunk(
  "notes/get-all", // Action type
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Send GET request to fetch all subjects
      const { data } = await axiosInstance.get(`/notes`, config);

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

/** action to get the notes by id */

export const getNotesById = createAsyncThunk(
  "get/notes-by-id",async(id,{rejectWithValue})=>{
    try {
      const config = {
        headers:{
          "Content-Type":"application/json"
        }
      }
      const { data } = await axiosInstance.get(`/notes/${id}`,config)
      return data.data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)