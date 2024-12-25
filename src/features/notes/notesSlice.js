import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllnotes, getNotesById} from "./notesAction.js"; // Import API actions or thunks

const initialState = {
  loading: false,
  notes: [], 
  error: null,
  success: false, 
  pagination: null,
  singleNote:{}
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
        state.notes = action.payload.data;
        state.pagination = action.payload.pagination; 
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
      })
      .addCase(getNotesById.pending,(state)=>{
        state.loading= true
        state.error= false
        state.success= false
      })
      .addCase(getNotesById.rejected,(state,action)=>{
        state.loading= false
        state.success = false
        state.error= true
        toast.error(action.payload, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        })
      })
      .addCase(getNotesById.fulfilled,(state,action)=>{
        state.loading= false
        state.error= false
        state.success= true
        state.singleNote = action.payload
        toast.success("Note is retrieved", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        })
      })
  },
});

export default notesSlice.reducer;
