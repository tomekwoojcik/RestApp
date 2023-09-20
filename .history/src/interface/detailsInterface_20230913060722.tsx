
interface DetailsModel{
  map: any
  personId: string
  kindLeave: string
  startDateOfLeave: string
  endDateOfLeave: string
  replacementPerson: string
  leaveId: string
  holidayWorkerApprovalStatus: string
  supervisorApprovalStatus: null | string
  supervisorComment: null | string
}

export default DetailsModel;