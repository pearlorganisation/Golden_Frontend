import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllFaculties } from "./FacultyAction";

const initialState = {
  loading: false,
  faculties: [],
  error: null,
  success: false,
};

const facultySlice = createSlice({
  name: "faculty",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllFaculties.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      .addCase(getAllFaculties.fulfilled, (state, action) => {
        state.loading = false;
        state.faculties = action.payload;
        state.success = true;
        toast.success("Faculties fetched successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      })

      .addCase(getAllFaculties.rejected, (state, action) => {
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

export default facultySlice.reducer;
