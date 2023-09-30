import { FC } from "react";
import { UserModel } from "../../../interface/responseModel";
import { Button } from "@mui/material";
interface SubordinatesRowProps {
  subordinatesObj: UserModel;
}

const EmployeeTableRow: FC<SubordinatesRowProps> = ({ subordinatesObj }) => {
  return (
    <tr>
          <td>{`${subordinatesObj.firstName} ${subordinatesObj.lastName}`}</td>
          <td>{subordinatesObj.id}</td>
          <td>{subordinatesObj.company.department}</td>
          <td>{subordinatesObj.company.name}</td>
          <td>{subordinatesObj.company.title}</td>
          <td>{subordinatesObj.company.role}</td>
          <td>{subordinatesObj.email}</td>
          <td>{subordinatesObj.phone}</td>
          <td><Button></Button></td>
    </tr>
  );
};

export default EmployeeTableRow;
