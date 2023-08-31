import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialStateModel {
    confirmLeaveArr: object[],
}

const initialState: InitialStateModel = {
    confirmLeaveArr: []
};
const leaveRequst = new Date

export const UserLeaveRequestSlice = createSlice({
  name: "userLeaveRequestSlice",
  initialState,
    reducers: {
        getConfirmLeave: (state, action: PayloadAction<{ name: string }>) => {
         state.confirmLeaveArr = 
      }
  },
});
