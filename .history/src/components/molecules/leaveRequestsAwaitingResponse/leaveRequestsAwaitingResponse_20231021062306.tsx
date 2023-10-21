import { FC, useContext } from "react";
import LeavePlanContext from "../../context/leavePlanContext";
import { employeeLeaveTableHeaders } from "../../context/supervisorContext";
import LeavePlanTable from "../leavePlanTable/leavePlanTable";

const LeaveRequestsAwaitingResponse: FC = () => {
    const {state} = useContext(LeavePlanContext);
  return (
    <div>
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
    </div>
  );
};

export default LeaveRequestsAwaitingResponse;
