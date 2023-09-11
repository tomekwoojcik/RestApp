import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Data from "../../components/context/localhostContext";

interface InitialStateModel {
  confirmLeaveArr: object[];
}

const initialState: InitialStateModel = {
  confirmLeaveArr: [],
};
const leaveRequest = new Data("leaveConfirm");

export const UserLeaveRequestSlice = createSlice({
  name: "userLeaveRequestSlice",
  initialState,
  reducers: {
    getConfirmLeave: (state, action: PayloadAction<{ name: string }>) => {
      state.confirmLeaveArr.push({
        id: state.confirmLeaveArr.length,
        name: action.payload.name
      })
    },
  },
});
