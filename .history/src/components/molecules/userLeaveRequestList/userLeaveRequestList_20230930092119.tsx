import { FC, useContext } from "react";
import { UserLeaveRequestContext } from "../../context/userLeaveRequestContext";
import LeavePlanTable from "../leavePlanTable/leavePlanTable";

const UserLeaveRequestList: FC = () => {
  const {
    state,
    tableHeaders,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useContext(UserLeaveRequestContext);
  const kindState: string = typeof state.leaveRequestDataArr;
  return state.leaveRequestDataArr.length !== 0 || kindState == "array" ? (
    <LeavePlanTable
      tableHeaders={tableHeaders}
      arr={state.leaveRequestDataArr}
      rowsPerPage={state.rowsPerPage}
      page={state.page}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      rowComponent ={}
    />
  ) : (
    <p>{"You currently have no approved leave."}</p>
  );
};

export default UserLeaveRequestList;
