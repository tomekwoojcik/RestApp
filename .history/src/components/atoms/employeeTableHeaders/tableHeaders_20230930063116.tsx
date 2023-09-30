import { TableHead, TableRow } from "@mui/material";
import { FC } from "react";

interface propsModel {
  tableHeaders: string[];
  StyledTableCell: any;
}

const TableHeaders: FC<propsModel> = ({ tableHeaders, StyledTableCell }) => {
  return (
    <TableHead>
      <TableRow>
        {tableHeaders.map((el: string) => 
          <StyledTableCell key={el}>{el}</StyledTableCell>
        )}
      </TableRow>
    </TableHead>
  );
};

export default TableHeaders;
