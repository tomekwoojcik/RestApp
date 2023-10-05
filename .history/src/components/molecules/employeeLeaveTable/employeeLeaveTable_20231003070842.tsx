import { ChangeEvent, FC, MouseEvent, useContext } from "react";
import LeavePlanTable from "../leavePlanTable/leavePlanTable";
import { SupervisorContext } from "../../context/supervisorContext";

const EmployeeLeaveTable: FC = () => {
    const {employeeLeaveTableHeaders, state} = useContext(SupervisorContext);
  return (
    <LeavePlanTable tableHeaders={employeeLeaveTableHeaders} arr={state.} rowsPerPage={0} page={0} handleChangePage={function (event: MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number): void {
          throw new Error("Function not implemented.");
      } } handleChangeRowsPerPage={function (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
          throw new Error("Function not implemented.");
      } } rowComponent={""} pagination={undefined}/>
  );
};

export default EmployeeLeaveTable;
