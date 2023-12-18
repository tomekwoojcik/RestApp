import { FC } from "react";
import { DetailsModel } from "../../../interface/leavePlanModels";
import LeavePlanDetailsRow from "../../atoms/leavePlanDetailsRow/leavePlanDetailsRow";
import { Table, TableBody } from "@mui/material";
import TableHeaders from "../../atoms/employeeTableHeaders/tableHeaders";
import { StyledTableCell } from "../../context/tableContext";
import FooterTable from "../../atoms/tableFooter/tableFooter";
import { leaveObjModel } from "../../context/userLeaveRequestContext";
import UserLeaveRequestRow from "../../atoms/userLeaveRequestRow/userLeaveRequestRow";
import uuid from "react-uuid";
import { MenuToggle } from "../../atoms/rejectRestTable/rejectRestTable";
import LeavePlanTableModule from "./leavePlanTable.module.scss";
export interface supervisorObj {
  text: string;
}
interface propsModel {
  tableHeaders: string[];
  arr: DetailsModel[] | leaveObjModel[];
  rowsPerPage: number;
  page: number;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => void;
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  rowComponent: string;
  pagination: any;
  supervisorMenu: supervisorObj;
  menu: MenuToggle;
}

const LeavePlanTable: FC<propsModel> = ({
  tableHeaders,
  arr,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
  rowComponent,
  pagination,
  supervisorMenu,
  menu,
}) => {
  return (
    <Table

      className={LeavePlanTableModule.table}>
        <TableHeaders
          StyledTableCell={StyledTableCell}
          tableHeaders={tableHeaders}
        />
        <TableBody>
          {(rowsPerPage > 0
            ? arr.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : arr
          ).map((obj: any) =>
            rowComponent == "request" ? (
              <UserLeaveRequestRow
                key={uuid()}
                supervisorMenu={supervisorMenu}
                props={obj}
                menu={MenuToggle.yes}
              />
            ) : (
              <LeavePlanDetailsRow key={uuid()} obj={obj} />
            ),
          )}
        </TableBody>
        {menu == MenuToggle.hidden ? null : (
          <FooterTable
            arrLength={arr.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            paginationComponent={pagination}
          />
        )}
      </Table>
  );
};

export default LeavePlanTable;
