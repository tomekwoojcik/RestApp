import { TableHead, TableRow } from "@mui/material";
import { FC } from "react";
import uuid from "react-uuid";
import TableHeadersModule from "./tableHeaders.module.scss";
interface propsModel {
  tableHeaders: string[];
  StyledTableCell: any;
}
const TableHeaders: FC<propsModel> = ({ tableHeaders, StyledTableCell }) => {
  return (
    <TableHead className={TableHeadersModule.tableHead}>
      <TableRow key={uuid()}>
        {tableHeaders.map((el: string) => 
          <StyledTableCell key={uuid()}>{el}</StyledTableCell>
        )}
      </TableRow>
    </TableHead>
  );
};

export default TableHeaders;
