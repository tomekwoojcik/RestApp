import { FC } from "react";
import { leaveObjModel } from "../../context/userLeaveRequestContext";
import UserLeaveRequestRow from "../../atoms/userLeaveRequestRow/userLeaveRequestRow";
import { DetailsModel } from "../../../interface/leavePlanModels";
import LeavePlanDetailsRow from "../../atoms/leavePlanDetailsRow/leavePlanDetailsRow";
interface propsModel {
  arr: leaveObjModel[] | DetailsModel[];
  tableHeaders: string[];
  text: string
}


const LeavePlanTable: FC<propsModel> = ({ arr, tableHeaders, text }) => {
  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((header: string) => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        
        {text != "requestRow" ?
              arr.map((el: any) => (
              <LeavePlanDetailsRow key={Math.random()} details={el} />
            ))
          : arr.map((el: leaveObjModel | DetailsModel) => (
          <UserLeaveRequestRow key={el.leaveId} props={el} /> 
        ))}
      </tbody>
    </table>
  );
};

export default LeavePlanTable;
