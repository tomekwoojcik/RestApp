import { FC } from "react";
import { leaveObjModel } from "../../context/userLeaveRequestContext";

interface propsModel {
  map(arg0: (el: string) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  arr: leaveObjModel[];
  tableHeaders: string[];
}

const LeavePlanTable: FC<propsModel> = (arr, tableHeaders) => {
  return (
    <table>
      <thead>
        <tr>
          {arr.map((el: string) => (
            <td>{el}</td>
          ))}
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
