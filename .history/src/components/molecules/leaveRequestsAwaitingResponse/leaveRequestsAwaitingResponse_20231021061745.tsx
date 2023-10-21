import { FC } from "react";

const LeaveRequestsAwaitingResponse: FC = () => {
    return (<div>
       <LeavePlanTable
        tableHeaders={employeeLeaveTableHeaders}
        arr={state.employeeLeave}
        rowsPerPage={state.rowsPerPage}
        page={state.page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        rowComponent={"request"}
              pagination={TablePaginationActionsRequestEmployee}
        supervisorMenu={supervisorMenu}
        menu={MenuToggle.yes}
      />
  </div>);
};

export default LeaveRequestsAwaitingResponse;
