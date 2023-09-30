import { TableHead, TableRow } from "@mui/material";
import { FC } from "react";

interface propsModel {
  tableHeaders: string[];
  StyledTableCellL: any;
}

const TableHeaders: FC<propsModel> = ({ tableHeaders, StyledTableCellL }) => {
  return (
    <TableHead>
      <TableRow>
        {tableHeaders.map((el: string) => 
          <StyledTableCellL key={el}>{el}</StyledTableCellL>
        )}
      </TableRow>
    </TableHead>
  );
};

export default TableHeaders;
