import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllSubjects } from "./SubjectAction"; // Import API actions or thunks

const initialState = {
  loading: false,
  subjects: [], 
  error: null,
  success: false, 
};

const subjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    
      .addCase(getAllSubjects.pending, (state) => {
        state.loading = true;
        state.error = null; 
        state.success = false; 
      })

      .addCase(getAllSubjects.fulfilled, (state, action) => {
        state.loading = false;
        state.subjects = action.payload.data;
        state.pagination = action.payload.pagination;  
        state.success = true;
        toast.success("Subjects fetched successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      })

      .addCase(getAllSubjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
        toast.error(`Error: ${action.payload}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      });
  },
});

export default subjectSlice.reducer;
