import { Button } from "@mui/material";
import { FC, useContext, useEffect, useReducer } from "react";
import Data from "../../context/localhostContext";
import { SupervisorContext } from "../../context/supervisorContext";
import LeavePlanTable from "../../molecules/leavePlanTable/leavePlanTable";
import TablePaginationActionsRequestEmployee from "../tablePaginationActionsRequestEmployee/tablePaginationActionsRequestEmployee";
export enum MenuToggle{
    hidden = "none",
    yes="true"
}

const RejectRestTable: FC = () => {

  const {
    employeeLeaveTableHeaders,
    handleChangePage,
    handleChangeRowsPerPage,
    handlePreviousPage,
      supervisorMenu,
    state,
  } = useContext(SupervisorContext);
  const rejectRestArr = new Data("rejectRestArr");
  const getRejectRestArr = rejectRestArr.getData();
  return (
    <div>
      <LeavePlanTable
        tableHeaders={employeeLeaveTableHeaders}
        arr={getRejectRestArr}
        rowsPerPage={state.rowsPerPage}
        page={state.page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        rowComponent={"request"}
        pagination={TablePaginationActionsRequestEmployee}
              supervisorMenu={supervisorMenu}
              menu = {MenuToggle.hidden}
      />
      <Button
        onClick={() => {
          handlePreviousPage("/user/workersList/employeeLeave");
        }}
      >
        Previous page
      </Button>
    </div>
  );
};

export default RejectRestTable;