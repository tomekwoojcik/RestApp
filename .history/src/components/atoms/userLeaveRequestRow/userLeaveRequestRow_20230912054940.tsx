import { FC } from "react";
import { leaveObjModel } from "../../context/userLeaveRequestContext";
import CancelLeaveButton from "../cancelLeaveButton/cancelLeaveButton";
import DetailsModel from "../../../interface/detailsInterface";

interface propsModel {
  key: string;
  props: leaveObjModel | DetailsModel;
}

const UserLeaveRequestRow: FC<propsModel> = props => {
  return (
    <tr>
      <td>{props.props.startDateOfLeave}</td>
      <td>{props.props.endDateOfLeave}</td>
      <td>{props.props.kindLeave}</td>
      <td>{props.props.holidayWorkerApprovalStatus}</td>
      <td>{props.props.replacementPerson}</td>
      <td>
        <CancelLeaveButton props={props.props.leaveId} />
      </td>
    </tr>
  );
};

export default UserLeaveRequestRow;
