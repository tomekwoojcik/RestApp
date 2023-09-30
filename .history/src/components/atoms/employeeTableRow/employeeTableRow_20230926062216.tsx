import { FC } from "react";
import { UserModel } from "../../../interface/responseModel";
import { Button } from "@mui/material";
interface SubordinatesRowProps {
  subordinatesObj: UserModel;
  StyledTableRow: any;
}

const EmployeeTableRow: FC<SubordinatesRowProps> = ({ subordinatesObj, StyledTableRow }) => {
  return (
    <StyledTableRow>
      <StyledTableCell>{`${subordinatesObj.firstName} ${subordinatesObj.lastName}`}</StyledTableCell>
      <td>{subordinatesObj.id}</td>
      <td>{subordinatesObj.company.department}</td>
      <td>{subordinatesObj.company.title}</td>
      <td>{subordinatesObj.company.role}</td>
      <td>{subordinatesObj.email}</td>
      <td>{subordinatesObj.phone}</td>
      <td>
        <Button>Show employee leaves</Button>
      </td>
    </StyledTableRow>
  );
};

export default EmployeeTableRow;
