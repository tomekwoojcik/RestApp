import { FC } from "react";
import { DetailsModel } from "../../../interface/leavePlanModels";
import LeavePlanDetailsRow from "../../atoms/leavePlanDetailsRow/leavePlanDetailsRow";
import { Table, TableBody } from "@mui/material";
import { ThemeProvider } from "styled-components";
import TableHeaders from "../../atoms/employeeTableHeaders/tableHeaders";
import { StyledTableCell } from "../../context/tableContext";
import theme from "../../context/themeContext";

interface propsModel {
  tableHeaders: string[];
  arr: DetailsModel[]
  rowsPerPage: number
  page:number
}

const LeavePlanTable: FC<propsModel> = ({ tableHeaders, arr, rowsPerPage, page }) => {
  console.log(arr);
  function uuidv4(): string {
    throw new Error("Function not implemented.");
  }

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
      </Table>
    </ThemeProvider>
  );
};

export default LeavePlanTable;
