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
      <td>
        <CancelLeaveButton props={props.props.leaveId} />
      </td>
    </tr>
  );
};

export default UserLeaveRequestRow;
