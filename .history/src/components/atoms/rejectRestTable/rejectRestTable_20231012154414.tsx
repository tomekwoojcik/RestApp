import { Button } from "@mui/material";
import { FC, useContext, useEffect } from "react";
import Data from "../../context/localhostContext";
import { SupervisorContext } from "../../context/supervisorContext";
import LeavePlanTable from "../../molecules/leavePlanTable/leavePlanTable";
import TablePaginationActionsRequestEmployee from "../tablePaginationActionsRequestEmployee/tablePaginationActionsRequestEmployee";

const RejectRestTable: FC = () => {
   const {
    employeeLeaveTableHeaders,
    state,
    handleChangePage,
    handleChangeRowsPerPage,
    filterLeaveEmployee,
      handlePreviousPage,
    supervisorMenu
  } = useContext(SupervisorContext);
  const rejectRestArr = new Data("getEmployeeLeaveObj");
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
              supervisorMenu = {supervisorMenu}
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

export default RejectRestTable;
