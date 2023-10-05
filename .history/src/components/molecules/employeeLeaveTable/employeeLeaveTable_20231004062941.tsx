import { FC, useContext, useEffect } from "react";
import LeavePlanTable from "../leavePlanTable/leavePlanTable";
import { SupervisorContext } from "../../context/supervisorContext";
import TablePaginationActionsRequest from "../../atoms/tablePaginationRequest/tablePaginationsRequest";

const EmployeeLeaveTable: FC = () => {
    const { employeeLeaveTableHeaders, state, handleChangePage, handleChangeRowsPerPage, filterLeaveEmployee } = useContext(SupervisorContext);
    // useEffect(() => {
    //     filterLeaveEmployee();
    // },[])
  return (
      <LeavePlanTable
          tableHeaders={employeeLeaveTableHeaders}
          arr={state.employeeLeave}
          rowsPerPage={state.rowsPerPage}
          page={state.page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          rowComponent={"request"}
          pagination={TablePaginationActionsRequest} />
  );
};

export default EmployeeLeaveTable;
