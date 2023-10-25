import { FC, useContext } from "react";
import LeavePlanContext from "../../context/leavePlanContext";
import { employeeLeaveTableHeaders } from "../../context/supervisorContext";
import LeaveTableAwaitingAndReject from "../leaveTableAwaitingAndReject/leaveTableAwaitingAndReject";
import { StyledTableCell } from "../../context/tableContext";

const LeaveRequestsAwaitingResponse: FC = () => {
  const { state, handleChangePage, handleChangeRowsPerPage } = useContext(
    LeavePlanContext,
  );
  return (
    <div>
      <p>Leave requests awaiting response.</p>
      {state.leaveRequestsAwaitingResponseArr.length == 0 ? (
        <p>You have no pending requests.</p>
      ) : (
        <LeaveTableAwaitingAndReject
          arr={state.leaveRequestsAwaitingResponseArr}
          styled={StyledTableCell}
          tableHeaders={employeeLeaveTableHeaders}
          page={state.page}
          rowsPerPage={state.rowsPerPage}
        />
      )}

      <p>Leave requests rejected.</p>
      {state.leaveRequestsCancelArr.length == 0 ? (
        <p>You have no rejected applications.</p>
      ) : (
        <LeaveTableAwaitingAndReject
          arr={state.leaveRequestsCancelArr}
          styled={StyledTableCell}
          tableHeaders={employeeLeaveTableHeaders}
          page={state.page}
          rowsPerPage={state.rowsPerPage}
        />
      )}
    </div>
  );
};

export default LeaveRequestsAwaitingResponse;