import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Data from "../../components/context/localhostContext";

interface InitialStateModel {
    confirmLeaveArr: object[],
}

const initialState: InitialStateModel = {
    confirmLeaveArr: []
};
const leaveRequst = new Data('leaveConfirm');
const foo = leaveRequst.getData();
console.log(foo);

export const UserLeaveRequestSlice = createSlice({
  name: "userLeaveRequestSlice",
  initialState,
    reducers: {
        getConfirmLeave: (state, action: PayloadAction<{ name: string }>) => {
         state.confirmLeaveArr
      }
  },
});
