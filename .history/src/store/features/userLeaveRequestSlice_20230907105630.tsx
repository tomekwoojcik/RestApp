import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitLeaveRequestSliceModel } from "../../interface/userLeaveRequestModel";

const initialState: InitLeaveRequestSliceModel = {
    confirmLeave:[]
}


export const UserLeaveRequestSlice = createSlice({
    name: "LeaveRequestSlice",
    initialState, 
    reducers: {
        getUserLeaveConfirm: (state, action: PayloadAction<{ name: string }>) => {
            
            state.confirmLeave = [...]
        }
    }
})