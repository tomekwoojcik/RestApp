
import { FC, useContext } from "react";
import {
  UserLeaveRequestContext,
  leaveObjModel,
} from "../../context/userLeaveRequestContext";
import UserLeaveRequestRow from "../../atoms/userLeaveRequestRow/userLeaveRequestRow";
import { DetailsModel } from "../../../interface/leavePlanModels";
import LeavePlanDetailsRow from "../../atoms/leavePlanDetailsRow/leavePlanDetailsRow";
import { Table, TableBody } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { UserModel } from "../../../interface/responseModel";
import TableHeaders from "../../atoms/employeeTableHeaders/tableHeaders";
import { StyledTableCell } from "../../context/tableContext";
import theme from "../../context/themeContext";

interface propsModel {
  tableHeaders: string[];
  arr: DetailsModel[]
}

const LeavePlanTable: FC<propsModel> = ({tableHeaders, arr}) => {
  return (
    <ThemeProvider theme={theme}>
      <Table>
        <TableHeaders
          StyledTableCell={StyledTableCell}
          tableHeaders={tableHeaders}
        />
      <TableBody>
          {(state.rowsPerPage > 0
            ? state.leaveRequestDataArr.slice(
              state.page * state.rowsPerPage,
              state.page * state.rowsPerPage + state.rowsPerPage,
            )
            : state.leaveRequestDataArr
          ).map((obj:leaveObjModel) => (
            <LeavePlanDetailsRow key={Math.random()} leaveRequest={obj} />
          ))}
        </TableBody>
      </Table>
    </ThemeProvider>
  );
};

export default LeavePlanTable;
