import { createSlice } from "@reduxjs/toolkit";

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

export const LeaveRequestSlice = createSlice({
  name: "LeaveRequestSlice",
  initialState,
  reducers: {
    
  }
})