import tableHeaders from "../../atoms/employeeTableHeaders/tableHeaders"
import TablePaginationActionsRequest from "../../atoms/tablePaginationRequest/tablePaginationsRequest"
import LeavePlanTable from "../leavePlanTable/leavePlanTable"
import {
  initState,
  reducer,
  REDUCER_ACTION_TYPE,
} from "../../../hooks/supervisorHooks";
const EmployeeLeave = () => {
      const [state, dispatch] = useReducer(reducer, initState);

    return (
         <LeavePlanTable
      tableHeaders={tableHeaders}
      arr={state.leaveRequestDataArr}
      rowsPerPage={state.rowsPerPage}
      page={state.page}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      rowComponent={"request"}
      pagination={TablePaginationActionsRequest}
    />
    )
}

export default EmployeeLeave