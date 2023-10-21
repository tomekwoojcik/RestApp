import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  ThemeProvider,
} from "@mui/material";
import { FC } from "react";
import TableHeaders from "../../atoms/employeeTableHeaders/tableHeaders";
import theme from "../../context/themeContext";
import { leaveObjModel } from "../../context/userLeaveRequestContext";
import LeaveTableAwaitingAndRejectRow from "../../atoms/leaveTableAwaitingAndRejectRow/leaveTableAwaitingAndRejectRow";
interface propsModel {
  tableHeaders: string[];
  styled: any;
  arr: leaveObjModel[];
  rowsPerPage: number;
  page: number;
}

const LeaveTableAwaitingAndReject: FC<propsModel> = ({
  tableHeaders,
  styled,
  arr,
  rowsPerPage,
  page,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Table component={Paper}>
        <Table>
          <TableHeaders StyledTableCell={styled} tableHeaders={tableHeaders} />
          <TableBody>
            {(rowsPerPage > 0
              ? arr.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : arr
            ).map((obj: leaveObjModel) => (
              <LeaveTableAwaitingAndRejectRow obj={obj} />
            ))}
          </TableBody>
          <Table
        </Table>
      </Table>
    </ThemeProvider>
  );
};

export default LeaveTableAwaitingAndReject;
