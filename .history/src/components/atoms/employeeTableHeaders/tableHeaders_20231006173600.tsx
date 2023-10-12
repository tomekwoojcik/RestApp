import { TableHead, TableRow } from "@mui/material";
import { FC } from "react";
import uuid from "react-uuid";

interface propsModel {
  tableHeaders: string[];
  StyledTableCell: any;
}

const TableHeaders: FC<propsModel> = ({ tableHeaders, StyledTableCell }) => {
  return (
    <TableHead>
      <TableRow>
        {tableHeaders.map((el: string) => 
          <StyledTableCell key={uuid()}>{el}</StyledTableCell>
        )}
      </TableRow>
    </TableHead>
  );
};

export default TableHeaders;
