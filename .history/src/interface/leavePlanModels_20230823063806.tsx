interface LeavePlanItemModel {
  subtractDay: number;
  howMuchTimeToStart: number;
}
interface ErrorMessageModel {
  dateWarnMess: Date;
  warnMess: string;
}

interface ObjectDataModel {
   firstDay: DateObjType;
    lastDay: DateObjType;
    kindLeave: string;
    replacePerson: string;
}
interface DetailsModel {
  [x: string]: any;
   personId: string;
    kindLeave: string;
    startDateOfLeave: string;
    endDateOfLeave: string;
    replacementPerson: string;
    leaveId: string;
    holidayWorkerApprovalStatus: string;
}

interface LeavePlanContextModel {
  handleDay: (type: REDUCER_ACTION_TYPE, e: Dayjs | null) => void;
  handleValue: (
    e: ChangeEvent<HTMLInputElement>,
    type: REDUCER_ACTION_TYPE,
  ) => void;
  state: {
    firstDay: DateObjType;
    lastDay: DateObjType;
    kindLeave: string;
    replacePerson: string;
    arrayErrorMessage: ErrorMessageModel[];
    dataRender: DetailsModel[];
    dataConfirmedRender: DetailsModel[];
  };
  leaveArr: string[];
  personReplaceArr: string[];
  dayFun: (personId: string, leaveId: string) => LeavePlanItemModel[];
  menuListArr: string[];
  handleActionLeave: (e: any) => void;
  leavePlanHandle: () => void; // Add this property to the interface
}