import { FC, useContext } from "react";
import LeavePlanContext from "../../context/leavePlanContext";
import { employeeLeaveTableHeaders } from "../../context/supervisorContext";
import LeavePlanTable from "../leavePlanTable/leavePlanTable";

const LeaveRequestsAwaitingResponse: FC = () => {
    const {state, handleChangePage, handleChangeRowsPerPage} = useContext(LeavePlanContext);
  return (
    <div>
      
    </div>
  );
};

export default LeaveRequestsAwaitingResponse;
