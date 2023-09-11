import { FC } from "react";
import { leaveObjModel } from "../../context/userLeaveRequestContext";

interface propsModel {
  key: string;
  props: leaveObjModel;
}

const UserLeaveRequestRow: FC<propsModel> = props => {
  console.log(props);

  return (
    <tr>
      <td>{props.props.startDateOfLeave}</td>
          <td>{props.props.endDateOfLeave}</td>
          <td>{props.props.holidayWorkerApprovalStatus}</td>
    </tr>
  );
};

export default UserLeaveRequestRow;
