import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";

/** get purchases by the user using the email */
// export const getPurchase = createAsyncThunk(
//     "get/purchase", async ({email}, {
//         rejectWithValue
//     }) => {
//         try {
//             console.log('--------the email is', email)
//             const config = {
//                 headers: {
//                     "Content-Type": "application/json"
//                 }
//             }
//             const data = await axiosInstance.get(`/order/purchase`,{email:email},{
//                 config
//             })
//             return data.data
//         } catch (error) {
//             if (error.response && error.response.data.message) {
//                 return rejectWithValue(error.response.data.message);
//             } else {
//                 return rejectWithValue(error.message);
//             }
//         }
//     }
// )

export const getPurchase = createAsyncThunk(
    "get/purchase",
    async ({
        email
    }, {
        rejectWithValue
    }) => {
        try {
            console.log('--------the email is', email);
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };
            // Send the email as a query parameter
            const {
                data
            } = await axiosInstance.get(`/order/purchase`, {
                params: {
                    email
                }, // Use `params` to send query parameters
                ...config
            });
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
