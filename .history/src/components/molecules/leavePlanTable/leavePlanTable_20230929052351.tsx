import { FC } from "react";
import { leaveObjModel } from "../../context/userLeaveRequestContext";
import UserLeaveRequestRow from "../../atoms/userLeaveRequestRow/userLeaveRequestRow";
import { DetailsModel } from "../../../interface/leavePlanModels";
import LeavePlanDetailsRow from "../../atoms/leavePlanDetailsRow/leavePlanDetailsRow";
interface propsModel {
  arr: leaveObjModel[] | DetailsModel[];
  tableHeaders: string[];
  rowComponent: string;
}

const LeavePlanTable: FC<propsModel> = ({
  arr,
  tableHeaders,
  rowComponent,
}) => {
  return (
   
  );
};

export default LeavePlanTable;