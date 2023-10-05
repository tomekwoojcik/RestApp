import { FC, useContext, useEffect } from "react";
import LeavePlanTable from "../leavePlanTable/leavePlanTable";
import { SupervisorContext } from "../../context/supervisorContext";
import TablePaginationActionsRequestEmployee from "../../atoms/tablePaginationActionsRequestEmployee/tablePaginationActionsRequestEmployee";

const EmployeeLeaveTable: FC = () => {
    const { employeeLeaveTableHeaders, state, handleChangePage, handleChangeRowsPerPage, filterLeaveEmployee } = useContext(SupervisorContext);
    useEffect(() => {
        
        filterLeaveEmployee(state.employeeObj);
    }, [])
    console.log(state.employeeObj);
  return (
      <LeavePlanTable
          tableHeaders={employeeLeaveTableHeaders}
          arr={state.employeeLeave}
          rowsPerPage={state.rowsPerPage}
          page={state.page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          rowComponent={"request"}
          pagination={TablePaginationActionsRequestEmployee} />
  );
};

export default EmployeeLeaveTable;
