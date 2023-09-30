import { FC } from "react";
import { leaveObjModel } from "../../context/userLeaveRequestContext";
import UserLeaveRequestRow from "../../atoms/userLeaveRequestRow/userLeaveRequestRow";
import { DetailsModel } from "../../../interface/leavePlanModels";
import LeavePlanDetailsRow from "../../atoms/leavePlanDetailsRow/leavePlanDetailsRow";
import TableHeaders from "../../atoms/employeeTableHeaders/tableHeaders";
import { StyledTableCell, StyledTableRow } from "../../context/tableContext";
import { Table, TableBody, ThemeProvider } from "@mui/material";
import theme from "../../context/themeContext";
import { UserModel } from "../../../interface/responseModel";
import EmployeeTableRow from "../../atoms/employeeTableRow/employeeTableRow";
interface propsModel {
  arr: leaveObjModel[] | DetailsModel[];
  tableHeaders: string[];
  rowComponent: string;
}

const LeavePlanTable: FC<propsModel> = ({
  arr,
  tableHeaders,
  rowComponent,
}) => {
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
      </Table>
    </ThemeProvider>
  );
};

export default LeavePlanTable;
