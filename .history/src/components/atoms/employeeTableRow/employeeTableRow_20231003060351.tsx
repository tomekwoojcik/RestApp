import { FC } from "react";
import { UserModel } from "../../../interface/responseModel";
import { Button } from "@mui/material";
interface SubordinatesRowProps {
  subordinatesObj: UserModel;
  StyledTableRow: any;
  StyledTableCell: any;
  getEmployeeLeave: (subordinatesObj:UserModel) => void;
}

const EmployeeTableRow: FC<SubordinatesRowProps> = ({
  subordinatesObj,
  StyledTableRow,
  StyledTableCell,
  getEmployeeLeave,
}) => {
  return (
    <StyledTableRow>
      <StyledTableCell>{`${subordinatesObj.firstName} ${subordinatesObj.lastName}`}</StyledTableCell>
      <StyledTableCell>{subordinatesObj.id}</StyledTableCell>
      <StyledTableCell>{subordinatesObj.company.department}</StyledTableCell>
      <StyledTableCell>{subordinatesObj.company.title}</StyledTableCell>
      <StyledTableCell>{subordinatesObj.company.role}</StyledTableCell>
      <StyledTableCell>{subordinatesObj.email}</StyledTableCell>
      <StyledTableCell>{subordinatesObj.phone}</StyledTableCell>
      <StyledTableCell>
        <Button onClick={() => fil}>Show employee leaves</Button>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default EmployeeTableRow;
