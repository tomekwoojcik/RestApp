import { FC, useContext } from "react";
import LeavePlanContext from "../../context/leavePlanContext";
import { employeeLeaveTableHeaders } from "../../context/supervisorContext";
import LeavePlanTable from "../leavePlanTable/leavePlanTable";
import LeaveTableAwaitingAndReject from "../leaveTableAwaitingAndReject/leaveTableAwaitingAndReject";

const LeaveRequestsAwaitingResponse: FC = () => {
    const {state, handleChangePage, handleChangeRowsPerPage} = useContext(LeavePlanContext);
  return (
    <div>
      <LeaveTableAwaitingAndReject />
    </div>
  );
};

export default LeaveRequestsAwaitingResponse;
