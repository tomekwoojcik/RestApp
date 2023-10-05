import { FC, useContext, useEffect } from "react";
import LeavePlanTable from "../leavePlanTable/leavePlanTable";
import { SupervisorContext } from "../../context/supervisorContext";
import TablePaginationActionsRequestEmployee from "../../atoms/tablePaginationActionsRequestEmployee/tablePaginationActionsRequestEmployee";
import Data from "../../context/localhostContext";

const EmployeeLeaveTable: FC = () => {
  const {
    employeeLeaveTableHeaders,
    state,
    handleChangePage,
    handleChangeRowsPerPage,
    filterLeaveEmployee,
  } = useContext(SupervisorContext);
  useEffect(() => {
    const employeeLeaveObj = new Data("employeeLeaveObj");
    filterLeaveEmployee(employeeLeaveObj.getData());
  }, []);
  
  return (
    <LeavePlanTable
      tableHeaders={employeeLeaveTableHeaders}
      arr={state.employeeLeave}
      rowsPerPage={state.rowsPerPage}
      page={state.page}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      rowComponent={"request"}
      pagination={TablePaginationActionsRequestEmployee}
    />
  );
};

export default EmployeeLeaveTable;
