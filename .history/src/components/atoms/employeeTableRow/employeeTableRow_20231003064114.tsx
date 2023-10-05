import { FC } from "react";
import { UserModel } from "../../../interface/responseModel";
import { Button } from "@mui/material";
import TablePaginationActionsRequest from "../tablePaginationRequest/tablePaginationsRequest";
import LeavePlanTable from "../../molecules/leavePlanTable/leavePlanTable";
interface SubordinatesRowProps {
  subordinatesObj: UserModel;
  StyledTableRow: any;
  StyledTableCell: any;
  getEmployeeLeave: (subordinatesObj: UserModel) => void;
  filterLeaveEmployee: (subordinatesObj: UserModel) => void;

  employeeLeaveTableHeaders: string[];
  state: any;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => void;
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const EmployeeTableRow: FC<SubordinatesRowProps> = ({
  subordinatesObj,
  StyledTableRow,
  StyledTableCell,
  getEmployeeLeave,
  filterLeaveEmployee,

  employeeLeaveTableHeaders,
  state,
  handleChangePage,
  handleChangeRowsPerPage

}) => {
  return (
    <div>
    <StyledTableRow>
      <StyledTableCell>{`${subordinatesObj.firstName} ${subordinatesObj.lastName}`}</StyledTableCell>
      <StyledTableCell>{subordinatesObj.id}</StyledTableCell>
      <StyledTableCell>{subordinatesObj.company.department}</StyledTableCell>
      <StyledTableCell>{subordinatesObj.company.title}</StyledTableCell>
      <StyledTableCell>{subordinatesObj.company.role}</StyledTableCell>
      <StyledTableCell>{subordinatesObj.email}</StyledTableCell>
      <StyledTableCell>{subordinatesObj.phone}</StyledTableCell>
      <StyledTableCell>
        <Button onClick={() => getEmployeeLeave(subordinatesObj)}>Show employee leaves</Button>
      </StyledTableCell>
      </StyledTableRow>

  <LeavePlanTable
      tableHeaders={employeeLeaveTableHeaders}
      arr={state.employeeLeave}
      rowsPerPage={state.rowsPerPage}
      page={state.page}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      rowComponent={"request"}
      pagination={TablePaginationActionsRequest}
    />


      </div>
  );
};

export default EmployeeTableRow;
