import { createSlice } from "@reduxjs/toolkit"
import { getPurchase } from "./purchaseAction"

const initialState = {
    isLoading:false,
    isSuccess:false,
    isError:false,
    purchaseData:{}
}

const purchaseSlice = createSlice({
    name:"purchase",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getPurchase.pending, state=>{
            state.isLoading= true
            state.isError= false
            state.isSuccess= false;
        })
        .addCase(getPurchase.fulfilled,(state,action)=>{
            state.isError= false
            state.isLoading = false
            state.isSuccess = true
            state.purchaseData= action.payload
        })
        .addCase(getPurchase.rejected,(state,action)=>{
            state.isError = true
            state.isLoading = false
            state.isSuccess= false
            state.purchaseData = {}
        })
    }
})

export default purchaseSlice.reducer