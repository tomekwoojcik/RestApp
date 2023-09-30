import { FC, createContext } from "react";
import { UserModel } from "../../../interface/responseModel";
import EmployeeTableRow from "../../atoms/employeeTableRow/employeeTableRow";
import TableHeaders from "../../atoms/employeeTableHeaders/tableHeaders";
import { SupervisorContext } from "../../context/supervisorContext";

interface TableProps {
  [x: string]: any;
  subordinatesArr: UserModel[];
}

const EmployeeTable: FC<TableProps> = ({ subordinatesArr }) => {
  const {table } = createContext(SupervisorContext);
  return (
    <table>
      <TableHeaders/>
      <tbody>
        {subordinatesArr.map((subordinatesObj: UserModel) => (
          <EmployeeTableRow
            key={subordinatesObj.id}
            subordinatesObj={subordinatesObj}
          />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
