export interface LeaveRequestModel {
  leaveRequest: {
    dateOfApplication:string,
    endDateOfLeave: string,
    holidayWorkerApprovalStatus: string,
    kindLeave: string,
    leaveId: string,
    personId: number,
    replacementPerson:string,
    startDateOfLeave: string
    supervisorApprovalStatus: null
    supervisorComment: null
  }
}