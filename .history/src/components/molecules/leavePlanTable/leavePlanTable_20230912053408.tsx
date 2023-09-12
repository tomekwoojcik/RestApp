import { FC } from "react";
import { leaveObjModel } from "../../context/userLeaveRequestContext";
import UserLeaveRequestRow from "../../atoms/userLeaveRequestRow/userLeaveRequestRow";

interface propsModel {
  arr: leaveObjModel[] ;
  tableHeaders: string[];
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
        {arr.map((el: leaveObjModel) => (
          <UserLeaveRequestRow key={el.leaveId} props={el} />
        ))}
      </tbody>
    </table>
  );
};

export default LeavePlanTable;
