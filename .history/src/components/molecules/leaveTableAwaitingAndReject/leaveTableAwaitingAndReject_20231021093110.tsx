import {
  Paper,
  Table,
  TableBody,
  ThemeProvider,
} from "@mui/material";
import { FC } from "react";
import TableHeaders from "../../atoms/employeeTableHeaders/tableHeaders";
import theme from "../../context/themeContext";
import { leaveObjModel } from "../../context/userLeaveRequestContext";
import LeaveTableAwaitingAndRejectRow from "../../atoms/leaveTableAwaitingAndRejectRow/leaveTableAwaitingAndRejectRow";
import FooterTable from "../../atoms/tableFooter/tableFooter";
interface propsModel {
  tableHeaders: string[];
  styled: any;
  arr: leaveObjModel[];
  rowsPerPage: number;
  page: number;
  footerToggle: boolean;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => void;
  onRowsPerPageChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  paginationComponent: any;
  request: boolean;
}

const LeaveTableAwaitingAndReject: FC<propsModel> = ({
  tableHeaders,
  styled,
  arr,
  rowsPerPage,
  page,
  footerToggle,
  onPageChange,
  onRowsPerPageChange,
  paginationComponent,
  request
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
              <LeaveTableAwaitingAndRejectRow obj={obj} request={ request} />
            ))}
          </TableBody>
          {footerToggle == true ? (
            <FooterTable
              arrLength={arr.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={onPageChange}
              onRowsPerPageChange={onRowsPerPageChange}
              paginationComponent={paginationComponent}
            />
          ) : null}
        </Table>
      </Table>
    </ThemeProvider>
  );
};

export default LeaveTableAwaitingAndReject;
