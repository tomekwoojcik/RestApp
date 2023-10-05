import { FC, useContext } from "react";
import { UserModel } from "../../../interface/responseModel";
import EmployeeTableRow from "../../atoms/employeeTableRow/employeeTableRow";
import TableHeaders from "../../atoms/employeeTableHeaders/tableHeaders";
import { SupervisorContext } from "../../context/supervisorContext";
import { Table, TableBody, ThemeProvider } from "@mui/material";
import FooterTable from "../../atoms/tableFooter/tableFooter";
import theme from "../../context/themeContext";
import { StyledTableCell, StyledTableRow } from "../../context/tableContext";
import TablePaginationActions from "../../atoms/tablePaginationActions/tablePaginationActions"
interface TableProps {
  [x: string]: any;
  subordinatesArr: UserModel[];
}

const EmployeeTable: FC<TableProps> = () => {
  const {
    tableHeaders,
    state,
    handleChangePage,
    handleChangeRowsPerPage,
    
  } = useContext(SupervisorContext);
  return (
    <ThemeProvider theme={theme}>
      <Table>
        <TableHeaders
          StyledTableCell={StyledTableCell}
          tableHeaders={tableHeaders}
        />
        <TableBody>
          {(state.rowsPerPage > 0
            ? state.subordinatesArr.slice(
                state.page * state.rowsPerPage,
                state.page * state.rowsPerPage + state.rowsPerPage,
              )
            : state.subordinatesArr
          ).map((subordinatesObj: UserModel) => (
            <EmployeeTableRow
              key={subordinatesObj.id}
              subordinatesObj={subordinatesObj}
              StyledTableRow={StyledTableRow}
              StyledTableCell={StyledTableCell}
            />
          ))}
        </TableBody>
        <FooterTable
          arrLength={state.subordinatesArr.length}
          rowsPerPage={state.rowsPerPage}
          page={state.rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          paginationComponent={TablePaginationActions}
        />
      </Table>
    </ThemeProvider>
  );
};

export default EmployeeTable;
