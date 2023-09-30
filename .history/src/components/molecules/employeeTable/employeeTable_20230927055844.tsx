import { FC, useContext } from "react";
import { UserModel } from "../../../interface/responseModel";
import EmployeeTableRow from "../../atoms/employeeTableRow/employeeTableRow";
import TableHeaders from "../../atoms/employeeTableHeaders/tableHeaders";
import { SupervisorContext } from "../../context/supervisorContext";
import { Table } from "@mui/material";
import TableFooter from "../../atoms/tableFooter/tableFooter";

interface TableProps {
  [x: string]: any;
  subordinatesArr: UserModel[];
}

const EmployeeTable: FC<TableProps> = () => {
  const { tableHeaders, StyledTableCell, StyledTableRow, state } = useContext(
    SupervisorContext,
  );
  return (
    <Table>
      <TableHeaders
        StyledTableCell={StyledTableCell}
        tableHeaders={tableHeaders}
      />
      <tbody>
        {state.subordinatesArr.map((subordinatesObj: UserModel) => (
          <EmployeeTableRow
            key={subordinatesObj.id}
            subordinatesObj={subordinatesObj}
            StyledTableRow={StyledTableRow}
            StyledTableCell={StyledTableCell}
          />
        ))}
      </tbody>
      <TableFooter />
    </Table>
  );
};

export default EmployeeTable;
