import { Button } from "@mui/material";
import { FC, useContext, useEffect, useReducer } from "react";
import Data from "../../context/localhostContext";
import { SupervisorContext } from "../../context/supervisorContext";
import LeavePlanTable from "../../molecules/leavePlanTable/leavePlanTable";
import TablePaginationActionsRequestEmployee from "../tablePaginationActionsRequestEmployee/tablePaginationActionsRequestEmployee";
import {
  REDUCER_ACTION_TYPE,
  reducer,
  initState,
} from "../../../hooks/supervisorHooks";

const RejectRestTable: FC = () => {
  const [newState, dispatch] = useReducer(reducer, initState);

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
  useEffect(() => {
    dispatch({
      type: REDUCER_ACTION_TYPE.REJECT_REST_ARR,
      payload: getRejectRestArr,
    });
  }, [state.toggleRender]);

  return (
    <div>
      <LeavePlanTable
        tableHeaders={employeeLeaveTableHeaders}
        arr={newState.rejectRestArr}
        rowsPerPage={state.rowsPerPage}
        page={state.page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        rowComponent={"request"}
        pagination={TablePaginationActionsRequestEmployee}
        supervisorMenu={supervisorMenu}
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
