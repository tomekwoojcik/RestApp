import { FC, useContext } from "react";
import { UserModel } from "../../../interface/responseModel";
import EmployeeTableRow from "../../atoms/employeeTableRow/employeeTableRow";
import TableHeaders from "../../atoms/employeeTableHeaders/tableHeaders";
import { SupervisorContext } from "../../context/supervisorContext";
import { Table, TableBody, ThemeProvider } from "@mui/material";
import FooterTable from "../../atoms/tableFooter/tableFooter";
import theme from "../../context/themeContext";

interface TableProps {
  [x: string]: any;
  subordinatesArr: UserModel[];
}

const EmployeeTable: FC<TableProps> = () => {
  const { tableHeaders, StyledTableCell, StyledTableRow, state } = useContext(
    SupervisorContext,
  );
  return (
    <ThemeProvider theme={theme}>
      <Table>
        <TableHeaders
          StyledTableCell={StyledTableCell}
          tableHeaders={tableHeaders}
        />
        <TableBody>
          {(state.rowsPerPage > 0 ?
            state.
          ).map((subordinatesObj: UserModel) => (
            <EmployeeTableRow
              key={subordinatesObj.id}
              subordinatesObj={subordinatesObj}
              StyledTableRow={StyledTableRow}
              StyledTableCell={StyledTableCell}
            />
          ))}
        </TableBody>
        <FooterTable />
      </Table>
    </ThemeProvider>
  );
};

export default EmployeeTable;
