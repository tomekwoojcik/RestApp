import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Data from "../../components/context/localhostContext";

interface InitialStateModel {
    confirmLeaveArr: object[],
}

const initialState: InitialStateModel = {
    confirmLeaveArr: []
};
const leaveRequst = new Data('leaveConfirm');
console.log(leaveRequst);

export const UserLeaveRequestSlice = createSlice({
  name: "userLeaveRequestSlice",
  initialState,
    reducers: {
        getConfirmLeave: (state, action: PayloadAction<{ name: string }>) => {
         state.confirmLeaveArr
      }
  },
});
