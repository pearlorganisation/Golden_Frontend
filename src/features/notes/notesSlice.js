import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllnotes} from "./notesAction.js"; // Import API actions or thunks

const initialState = {
  loading: false,
  notes: [], 
  error: null,
  success: false, 
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    
      .addCase(getAllnotes.pending, (state) => {
        state.loading = true;
        state.error = null; 
        state.success = false; 
      })

      .addCase(getAllnotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload; 
        state.success = true;
        toast.success("notess fetched successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      })

      .addCase(getAllnotes.rejected, (state, action) => {
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

export default notesSlice.reducer;
