import { FC } from "react";
import { leaveObjModel } from "../../context/userLeaveRequestContext";
import CancelLeaveButton from "../cancelLeaveButton/cancelLeaveButton";

interface propsModel {
  key: string;
  props: leaveObjModel;
}

const UserLeaveRequestRow: FC<propsModel> = props => {
  return (
    <tr>
      {props.props.map((el: any) => <td key={el}> {el}</td>)}
      {/* <td>{props.props.startDateOfLeave}</td>
      <td>{props.props.endDateOfLeave}</td>
      <td>{props.props.kindLeave}</td>
      <td>{props.props.holidayWorkerApprovalStatus}</td>
      <td>{props.props.replacementPerson}</td> */}
      <td>
        <CancelLeaveButton props={props.props.leaveId} />
      </td>
    </tr>
  );
};

export default UserLeaveRequestRow;