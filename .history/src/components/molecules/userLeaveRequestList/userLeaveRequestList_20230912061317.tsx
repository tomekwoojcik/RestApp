import { FC, useContext } from "react";
import {
  UserLeaveRequestContext,
} from "../../context/userLeaveRequestContext";
import LeavePlanTable from "../leavePlanTable/leavePlanTable";

const UserLeaveRequestList: FC = () => {
  const { state, tableHeaders } = useContext(UserLeaveRequestContext);
  const kindState: string = typeof state.leaveRequestDataArr
  return (
    state.leaveRequestDataArr.length !== 0 || kindState == "array" ?
    <LeavePlanTable arr = {state.leaveRequestDataArr} tableHeaders ={tableHeaders} rowComponent={"requestRow"} /> : <p>{"You currently have no approved leave."}</p>
  );
};

export default UserLeaveRequestList;
