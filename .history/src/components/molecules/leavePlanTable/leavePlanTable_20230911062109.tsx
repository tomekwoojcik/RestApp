import { FC } from "react";
import { leaveObjModel } from "../../context/userLeaveRequestContext";

interface propsModel {
  arr: leaveObjModel[];
}

const LeavePlanTable: FC<propsModel> = arr => {
  return (
    <table>
      <thead>
        <tr>
          <td>{"Start date leave."}</td>
          <td>{"End date leave."}</td>
          <td>{"Kind of leave."}</td>
          <td>{"Status leave."}</td>
          <td>{"Replacement person."}</td>
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
