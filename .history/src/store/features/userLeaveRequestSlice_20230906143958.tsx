import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Data from "../../components/context/localhostContext";

interface ArrLeaveModel {
  confirmLeaveArr: object[];
}

const initialState: ArrLeaveModel = {
  confirmLeaveArr: object[],
};
const leaveRequest = new Data("leaveConfirm");

const UserLeaveRequestSlice = createSlice({
  name: "userLeaveRequestSlice",
  initialState,
  reducers: {
    getConfirmLeave: (state, action: PayloadAction<{  }>) => {
      state = [...leaveRequest.getData()];
    },
  },
});


export default UserLeaveRequestSlice.reducer;
export const {getConfirmLeave} = UserLeaveRequestSlice.actions;