import { FC, useContext } from "react";
import {
  UserLeaveRequestContext,
  leaveObjModel,
} from "../../context/userLeaveRequestContext";
import UserLeaveRequestRow from "../../atoms/userLeaveRequestRow/userLeaveRequestRow";
import LeavePlanTable from "../leavePlanTable/leavePlanTable";

const UserLeaveRequestList: FC = () => {
  const { state } = useContext(UserLeaveRequestContext);
  const kindState: string = typeof state.leaveRequestDataArr
  return (
    state.leaveRequestDataArr.length !== 0 || kindState == "array" ?
    <LeavePlanTable/> : <p>{"You currently have no approved leave."}</p>
  );
};

export default UserLeaveRequestList;
