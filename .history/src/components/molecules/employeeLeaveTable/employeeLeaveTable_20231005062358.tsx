import { FC, useContext, useEffect } from "react";
import LeavePlanTable from "../leavePlanTable/leavePlanTable";
import { SupervisorContext } from "../../context/supervisorContext";
import TablePaginationActionsRequestEmployee from "../../atoms/tablePaginationActionsRequestEmployee/tablePaginationActionsRequestEmployee";
import Data from "../../context/localhostContext";
import { Button } from "@mui/material";

const EmployeeLeaveTable: FC = () => {
  const {
    employeeLeaveTableHeaders,
    state,
    handleChangePage,
    handleChangeRowsPerPage,
    filterLeaveEmployee,
    handlePreviousPage,
  } = useContext(SupervisorContext);
  useEffect(() => {
    const employeeLeaveObj = new Data("employeeLeaveObj");
    filterLeaveEmployee(employeeLeaveObj.getData());
  }, []);

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
      />
      <Button 
        onClick={() => {
          handlePreviousPage("workersList");
        }}
      >
        Previous page
      </Button>
    </div>
  );
};

export default EmployeeLeaveTable;
