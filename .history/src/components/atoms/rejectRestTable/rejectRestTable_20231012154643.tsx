import { Button } from "@mui/material";
import { FC, useContext, useEffect, useReducer } from "react";
import Data from "../../context/localhostContext";
import { SupervisorContext } from "../../context/supervisorContext";
import LeavePlanTable from "../../molecules/leavePlanTable/leavePlanTable";
import TablePaginationActionsRequestEmployee from "../tablePaginationActionsRequestEmployee/tablePaginationActionsRequestEmployee";
import { reducer, initState } from "../../../hooks/loginPageHooks";
import { REDUCER_ACTION_TYPE } from "../../../hooks/supervisorHooks";

const RejectRestTable: FC = () => {
      const [state, dispatch] = useReducer(reducer, initState);

   const {
    employeeLeaveTableHeaders,
    handleChangePage,
    handleChangeRowsPerPage,
      handlePreviousPage,
    supervisorMenu
  } = useContext(SupervisorContext);
  const rejectRestArr = new Data("rejectRestArr");
  useEffect(() => {
      dispatch({
          type: REDUCER_ACTION_TYPE.REJECT_REST_ARR,
          payload:rejectRestArr
    })
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
