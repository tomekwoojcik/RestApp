import { FC, useContext } from "react";
import LeavePlanContext from "../../context/leavePlanContext";
import { employeeLeaveTableHeaders } from "../../context/supervisorContext";
import LeavePlanTable from "../leavePlanTable/leavePlanTable";
import LeaveTableAwaitingAndReject from "../leaveTableAwaitingAndReject/leaveTableAwaitingAndReject";
import { StyledTableCell } from "../../context/tableContext";

const LeaveRequestsAwaitingResponse: FC = () => {
  const { state, handleChangePage, handleChangeRowsPerPage } = useContext(
    LeavePlanContext,
  );
  console.log(state);
  return (
    <div>
      <LeaveTableAwaitingAndReject
        arr={state.leaveRequestsAwaitingResponseArr}
        styled={StyledTableCell}
        tableHeaders={employeeLeaveTableHeaders}
              page={state.page}
              rowsPerPage={state.rowsPerPage}
      />
    </div>
  );
};

export default LeaveRequestsAwaitingResponse;
