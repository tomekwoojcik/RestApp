import tableHeaders from "../../atoms/employeeTableHeaders/tableHeaders";
import TablePaginationActionsRequest from "../../atoms/tablePaginationRequest/tablePaginationsRequest";
import LeavePlanTable from "../leavePlanTable/leavePlanTable";
import {
  initState,
  reducer,
  REDUCER_ACTION_TYPE,
} from "../../../hooks/supervisorHooks";
import { useContext, useReducer } from "react";
import { SupervisorContext } from "../../context/supervisorContext";
const EmployeeLeave = () => {
    const {
      state,
    employeeLeaveTableHeaders,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useContext(SupervisorContext);

  return (
    <LeavePlanTable
      tableHeaders={employeeLeaveTableHeaders}
      arr={state.employeeLeave}
      rowsPerPage={state.rowsPerPage}
      page={state.page}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      rowComponent={"request"}
      pagination={TablePaginationActionsRequest}
    />
  );
};

export default EmployeeLeave;
