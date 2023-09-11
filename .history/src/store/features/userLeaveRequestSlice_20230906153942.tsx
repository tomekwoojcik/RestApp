import { createSlice } from "@reduxjs/toolkit";
import Data from "../../components/context/localhostContext";

export interface LeaveRequestModel {
  leaveRequest: {
    dateOfApplication: string;
    endDateOfLeave: string;
    holidayWorkerApprovalStatus: string;
    kindLeave: string;
    leaveId: string;
    personId: number;
    replacementPerson: string;
    startDateOfLeave: string;
    supervisorApprovalStatus: null;
    supervisorComment: null;
  };
}

interface StateModel {
  arrLeaveRequest: LeaveRequestModel['leaveRequest'][];
}

const initialState: StateModel ={
  arrLeaveRequest: [],
};

const data = new Data('leaveConfirm')

export const LeaveRequestSlice = createSlice({
  name: "LeaveRequestSlice",
  initialState,
  reducers: {
    refreshLeaveRequest: () => {
       rew
     }  
  }
})