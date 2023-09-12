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
    <table>
      <thead>
        <tr>
          {tableHeaders.map((header: string) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowComponent != "requestRow"
          ? arr.map((el: any) => (
              <LeavePlanDetailsRow key={Math.random()} details={el} />
            ))
          : arr.map((el: any) => (
              <UserLeaveRequestRow key={el.leaveId} props={el} />
            ))}
      </tbody>
    </table>
  );
};

export default LeavePlanTable;
