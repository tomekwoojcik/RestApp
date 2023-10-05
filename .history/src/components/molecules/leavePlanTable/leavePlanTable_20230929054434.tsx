import { FC } from "react";
import { leaveObjModel } from "../../context/userLeaveRequestContext";
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
            <LeavePlanDetailsRow
              details={{
                personId: "",
                kindLeave: "",
                startDateOfLeave: "",
                endDateOfLeave: "",
                replacementPerson: "",
                leaveId: "",
                holidayWorkerApprovalStatus: "",
              }}
            />
          ))}
        </TableBody>
      </Table>
    </ThemeProvider>
  );
};

export default LeavePlanTable;

// return (
//
// );

{
  /* <table>
      <thead>
        <tr>
          {tableHeaders.map((header: string) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowComponent != "requestRow"
          ? arr.map((el: any) => (
              <LeavePlanDetailsRow key={Math.random()} details={el} />
            ))
          : arr.map((el: any) => (
              <UserLeaveRequestRow key={el.leaveId} props={el} />
            ))}
      </tbody>
    </table> */
}