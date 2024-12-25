import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance"; // Ensure axiosInstance is properly configured

export const CreatePayment = createAsyncThunk(
  "/order/create",
  async ({ amount }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Create order request to the server
      const { data } = await axiosInstance.post("/order/create", { price: amount }, config);
      return data; // Return the order data for further processing
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const VerifyPayment = createAsyncThunk(
  "/order/verify",
  async ({ razorpayPaymentId, razorpayOrderId, razorpaySignature }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/order/verify", {
        razorpayPaymentId,
        razorpayOrderId,
        razorpaySignature,
      });
      return data; // Return the verification result
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
