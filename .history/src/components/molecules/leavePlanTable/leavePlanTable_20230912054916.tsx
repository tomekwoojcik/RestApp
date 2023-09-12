import { FC } from "react";
import { leaveObjModel } from "../../context/userLeaveRequestContext";
import UserLeaveRequestRow from "../../atoms/userLeaveRequestRow/userLeaveRequestRow";
import { DetailsModel } from "../../../interface/leavePlanModels";

interface propsModel {
  arr: leaveObjModel[] | DetailsModel[];
  tableHeaders: string[];
  element: FC
}


const LeavePlanTable: FC<propsModel> = ({ arr, tableHeaders }) => {
  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((header: string) => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {arr.map((el: leaveObjModel | DetailsModel) => (
          <UserLeaveRequestRow key={el.leaveId} props={el} />
        ))}
      </tbody>
    </table>
  );
};

export default LeavePlanTable;
