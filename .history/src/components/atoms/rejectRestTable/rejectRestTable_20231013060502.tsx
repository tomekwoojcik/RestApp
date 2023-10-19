import { Button } from "@mui/material";
import { FC, useContext, useEffect, useReducer } from "react";
import Data from "../../context/localhostContext";
import { SupervisorContext } from "../../context/supervisorContext";
import LeavePlanTable from "../../molecules/leavePlanTable/leavePlanTable";
import TablePaginationActionsRequestEmployee from "../tablePaginationActionsRequestEmployee/tablePaginationActionsRequestEmployee";
enum MenuToggle{
    hidden:""
}
import {
  REDUCER_ACTION_TYPE,
  reducer,
  initState,
} from "../../../hooks/supervisorHooks";

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
    console.log(state);
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
              menu = {}
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