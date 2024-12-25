import { createSlice } from "@reduxjs/toolkit";
import { CreatePayment, VerifyPayment } from "./PaymentAction";
import { toast } from "react-toastify";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    loading: false,
    paymentOrder: null,
    success: false,
    error: null,
  },
  reducers: {
    resetPayment: (state) => {
      state.loading = false;
      state.paymentOrder = null;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // CreatePayment Cases
    builder.addCase(CreatePayment.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(CreatePayment.fulfilled, (state, action) => {
      state.loading = false;
      state.paymentOrder = action.payload;
      state.success = true;
      toast.success("Order created successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    });
    builder.addCase(CreatePayment.rejected, (state, action) => {
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

    // VerifyPayment Cases
    builder.addCase(VerifyPayment.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(VerifyPayment.fulfilled, (state, action) => {
      state.loading = false;
      state.paymentOrder = action.payload;
      state.success = true;
      toast.success("Payment verified successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    });
    builder.addCase(VerifyPayment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
      toast.error(`Verification failed: ${action.payload}`, {
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

export const { resetPayment } = paymentSlice.actions;

export default paymentSlice.reducer;
