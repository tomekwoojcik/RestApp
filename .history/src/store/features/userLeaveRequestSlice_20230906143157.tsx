import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Data from "../../components/context/localhostContext";

interface StateModel {
  confirmLeaveArr: object;
}

const initialState: InitialStateModel = {
  confirmLeaveArr: [],
};
const leaveRequest = new Data("leaveConfirm");

const UserLeaveRequestSlice = createSlice({
  name: "userLeaveRequestSlice",
  initialState,
  reducers: {
    getConfirmLeave: (state, action: PayloadAction<{  }>) => {
      state.confirmLeaveArr.push({
      });
    },
  },
});


export default UserLeaveRequestSlice.reducer;
export const {getConfirmLeave} = UserLeaveRequestSlice.actions;