import { FC, useContext, useEffect } from "react";
import LeavePlanTable from "../leavePlanTable/leavePlanTable";
import { SupervisorContext } from "../../context/supervisorContext";
import TablePaginationActionsRequestEmployee from "../../atoms/tablePaginationActionsRequestEmployee/tablePaginationActionsRequestEmployee";
import Data from "../../context/localhostContext";
import { Button } from "@mui/material";
import { MenuToggle } from "../../atoms/rejectRestTable/rejectRestTable";

const EmployeeLeaveTable: FC = () => {
  const {
    employeeLeaveTableHeaders,
    state,
    handleChangePage,
    handleChangeRowsPerPage,
    filterLeaveEmployee,
      handlePreviousPage,
    supervisorMenu
  } = useContext(SupervisorContext);
  const employeeLeaveObj = new Data("getEmployeeLeaveObj");
  useEffect(() => {
    filterLeaveEmployee(employeeLeaveObj.getData());
  }, [state.toggleRender]);

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
        menu={MenuToggle.hidden}
      />
      <Button 
        onClick={() => {
          handlePreviousPage("/user/workersList");
        }}
      >
        Previous page
      </Button>
    </div>
  );
};

export default EmployeeLeaveTable;
