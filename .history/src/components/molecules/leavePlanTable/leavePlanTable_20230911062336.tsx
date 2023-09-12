import { FC } from "react";
import { leaveObjModel } from "../../context/userLeaveRequestContext";

interface propsModel {
    arr: leaveObjModel[];
    tableHeaders: string[]
}

const LeavePlanTable: FC<propsModel> = (arr, tableHeaders) => {
  return (
    <table>
      <thead>
        <tr>
          {arr.map(()=>{})}
        </tr>
      </thead>
      <tbody>
        {state.leaveRequestDataArr.map((el: leaveObjModel) => (
          <UserLeaveRequestRow key={el.leaveId} props={el} />
        ))}
      </tbody>
    </table>
  );
};

export default LeavePlanTable;
