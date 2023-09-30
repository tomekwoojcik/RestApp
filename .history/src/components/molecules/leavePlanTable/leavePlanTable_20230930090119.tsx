import { FC } from "react";
import { DetailsModel } from "../../../interface/leavePlanModels";
import LeavePlanDetailsRow from "../../atoms/leavePlanDetailsRow/leavePlanDetailsRow";
import { Table, TableBody } from "@mui/material";
import { ThemeProvider } from "styled-components";
import TableHeaders from "../../atoms/employeeTableHeaders/tableHeaders";
import { StyledTableCell } from "../../context/tableContext";
import theme from "../../context/themeContext";
import FooterTable from "../../atoms/tableFooter/tableFooter";

interface propsModel {
  tableHeaders: string[];
  arr: DetailsModel[] 
  rowsPerPage: number
  page: number
    handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => void;
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const LeavePlanTable: FC<propsModel> = ({ tableHeaders, arr, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage }) => {
  console.log(page);
  return (
    <ThemeProvider theme={theme}>
      <Table>
        <TableHeaders
          StyledTableCell={StyledTableCell}
          tableHeaders={tableHeaders}
        />
      <TableBody>
          {(rowsPerPage > 0
            ? arr.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage,
            )
            : arr
          ).map((obj:any) => (
            <LeavePlanDetailsRow customKey={obj.leaveId} obj={obj} />
          ))}
        </TableBody>
         <FooterTable
          arrLength={arr.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          paginationComponent={undefined}
        />
      </Table>
    </ThemeProvider>
  );
};

export default LeavePlanTable;
