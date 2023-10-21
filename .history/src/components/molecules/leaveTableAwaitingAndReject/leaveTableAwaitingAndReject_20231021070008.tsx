import { Paper, Table, TableBody, TableContainer, ThemeProvider } from "@mui/material";
import { FC } from "react";
import TableHeaders from "../../atoms/employeeTableHeaders/tableHeaders";
import theme from "../../context/themeContext";
interface propsModel {
  tableHeaders: string[];
  styled: any;
}

const LeaveTableAwaitingAndReject: FC<propsModel> = ({
  tableHeaders,
  styled,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Table component={Paper}>
        <Table>
                  <TableHeaders StyledTableCell={styled} tableHeaders={tableHeaders} />
                  <TableBody></TableBody>
        </Table>
      </Table>
    </ThemeProvider>
  );
};

export default LeaveTableAwaitingAndReject;
