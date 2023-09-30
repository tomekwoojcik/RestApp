import { TableHead, TableRow } from "@mui/material";
import { FC } from "react";

interface propsModel {
  tableHeaders: string[];
}

const TableHeaders: FC<propsModel> = ({ tableHeaders }) => {
  return (
    <TableHead>
      <TableRow>
        {tableHeaders.map((el: string) => 
          <td key={el}>{el}</td>
        )}
      </TableRow>
    </TableHead>
  );
};

export default TableHeaders;
