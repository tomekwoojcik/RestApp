import { DateObjType, REDUCER_ACTION_TYPE } from "../hooks/leavePlanHooks";
import { Dayjs } from "dayjs";
import { ChangeEvent } from "react";
export interface LeavePlanItemModel {
  subtractDay: number;
  howMuchTimeToStart: number;
}
export interface ErrorMessageModel {
  dateWarnMess: Date;
  warnMess: string;
}

export interface DetailsModel {
  [x: string]: any;
   personId: string;
    kindLeave: string;
    startDateOfLeave: string;
    endDateOfLeave: string;
    replacementPerson: string;
    leaveId: string;
    holidayWorkerApprovalStatus: string;
}

export interface LeavePlanContextModel {
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
  tableHeaders:string[],
  dayFun: (personId: string, leaveId: string) => LeavePlanItemModel[];
  menuListArr: string[];
  handleActionLeave: (e: any) => void;
  leavePlanHandle: () => void; // Add this property to the interface
   handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => void;
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}