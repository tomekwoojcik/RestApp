import { FC, useContext } from "react";
import {
  UserLeaveRequestContext,
  leaveObjModel,
} from "../../context/userLeaveRequestContext";
import UserLeaveRequestRow from "../../atoms/userLeaveRequestRow/userLeaveRequestRow";
import CancelLeaveButton from "../../atoms/cancelLeaveButton/cancelLeaveButton";

const UserLeaveRequestList: FC = () => {
  const { state } = useContext(UserLeaveRequestContext);

  return (
    <table>
      <thead>
        <tr>
          <td>{"Start date leave."}</td>
          <td>{"End date leave."}</td>
          <td>{"Kind of leave."}</td>
          <td>{"Status leave."}</td>
          <td>{"Date of submitting the leave application."}</td>
          <td>{"Replacement person."}</td>
          <td><CancelLeaveButton/></td>
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

export default UserLeaveRequestList;
