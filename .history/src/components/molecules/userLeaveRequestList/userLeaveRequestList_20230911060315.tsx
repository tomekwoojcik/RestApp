import { FC, useContext } from "react";
import {
  UserLeaveRequestContext,
  leaveObjModel,
} from "../../context/userLeaveRequestContext";
import UserLeaveRequestRow from "../../atoms/userLeaveRequestRow/userLeaveRequestRow";

const UserLeaveRequestList: FC = () => {
  const { state } = useContext(UserLeaveRequestContext);
  const kindState: string = typeof state.leaveRequestDataArr
  return (

    state.leaveRequestDataArr.length !== 0 || kindState == "array"  ?
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
      </table> : <p>{"You currently have no approved leave."}</p>
  );
};

export default UserLeaveRequestList;
