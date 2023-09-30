import { FC, useContext } from "react";
import { UserModel } from "../../../interface/responseModel";
import EmployeeTableRow from "../../atoms/employeeTableRow/employeeTableRow";
import TableHeaders from "../../atoms/employeeTableHeaders/tableHeaders";
import { SupervisorContext } from "../../context/supervisorContext";
import { Table } from "@mui/material";

interface TableProps {
  [x: string]: any;
  subordinatesArr: UserModel[];
}

const EmployeeTable: FC<TableProps> = ({ subordinatesArr }) => {
  const { tableHeaders, StyledTableCell, StyledTableRow } = useContext(SupervisorContext);
  return (
    <Table>
      <TableHeaders StyledTableCell={StyledTableCell} tableHeaders={tableHeaders} />
      <tbody>
        {subordinatesArr.map((subordinatesObj: UserModel) => (
          <EmployeeTableRow
            key={subordinatesObj.id}
            subordinatesObj={subordinatesObj}
            StyledTableRow={StyledTableRow}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeTable;
