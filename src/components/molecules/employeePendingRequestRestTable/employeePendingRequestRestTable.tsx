import {FC, useContext} from 'react'
import LeavePlanContext from '../../context/leavePlanContext'
import LeaveTableAwaitingAndReject from '../leaveTableAwaitingAndReject/leaveTableAwaitingAndReject';
import { StyledTableCell } from '../../context/tableContext';
import { employeeLeaveTableHeaders } from '../../context/supervisorContext';
import TablePaginationLeaveRequestsAwaitingResponse from '../../atoms/tablePaginationLeaveRequestsAwaitingResponse/tablePaginationLeaveRequestsAwaitingResponse';
const EmployeePendingRequestRestTable: FC = () => {
    const {state, handleChangePage, handleChangeRowsPerPage, handleRequestPending} = useContext(LeavePlanContext);
    return (
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
          request={false}
          handleRequest={handleRequestPending}
        />
    )
}

export default EmployeePendingRequestRestTable