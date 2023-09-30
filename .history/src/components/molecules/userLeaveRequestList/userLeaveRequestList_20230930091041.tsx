import { ChangeEvent, FC, MouseEvent, useContext } from "react";
import {
  UserLeaveRequestContext,
} from "../../context/userLeaveRequestContext";
import LeavePlanTable from "../leavePlanTable/leavePlanTable";

const UserLeaveRequestList: FC = () => {
  const { state, tableHeaders, handleChangePage,
        handleChangeRowsPerPage } = useContext(UserLeaveRequestContext);
  const kindState: string = typeof state.leaveRequestDataArr
  return (
    state.leaveRequestDataArr.length !== 0 || kindState == "array" ?
    <LeavePlanTable arr={state.leaveRequestDataArr} tableHeaders={tableHeaders} rowsPerPage={0} page={0} handleChangePage={function (event: MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number): void {
        throw new Error("Function not implemented.");
      } } handleChangeRowsPerPage={function (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        throw new Error("Function not implemented.");
      } } /> : <p>{"You currently have no approved leave."}</p>
  );
};

export default UserLeaveRequestList;
