import { FC, useContext } from "react";
import LeavePlanContext from "../../context/leavePlanContext";
import { employeeLeaveTableHeaders } from "../../context/supervisorContext";
import LeaveTableAwaitingAndReject from "../leaveTableAwaitingAndReject/leaveTableAwaitingAndReject";
import { StyledTableCell } from "../../context/tableContext";
import TablePaginationLeaveRequestsAwaitingResponse from "../../atoms/tablePaginationLeaveRequestsAwaitingResponse/tablePaginationLeaveRequestsAwaitingResponse";

const LeaveRequestsAwaitingResponse: FC = () => {
  const { state, handleChangePage, handleChangeRowsPerPage, handleRequestPending } = useContext(
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
            footerToggle={false}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            paginationComponent={TablePaginationLeaveRequestsAwaitingResponse}
            request={true}
            handleRequest = {handleRequestPending}
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
            footerToggle={true}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            paginationComponent={TablePaginationLeaveRequestsAwaitingResponse}
            request={false}
        />
      )}
    </div>
  );
};

export default LeaveRequestsAwaitingResponse;
