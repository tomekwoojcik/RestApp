import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitLeaveRequestSliceModel } from "../../interface/userLeaveRequestModel";
import Data from "../../components/context/localhostContext";

const initialState: InitLeaveRequestSliceModel = {
    confirmLeave:[]
}

const leaveData = new Data('leaveConfirm')

export const UserLeaveRequestSlice = createSlice({
    name: "LeaveRequestSlice",
    initialState, 
    reducers: {
        getUserLeaveConfirm: (state, action: PayloadAction<{ name: string }>) => {
            state.confirmLeave = [...leaveData.getData()];
        }
    }
})