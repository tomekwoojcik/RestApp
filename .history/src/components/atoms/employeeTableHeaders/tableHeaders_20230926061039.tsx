import { TableHead, TableRow } from "@mui/material";
import { FC } from "react";

interface propsModel {
  tableHeaders: string[];
  style: any;
}

const TableHeaders: FC<propsModel> = ({ tableHeaders, style }) => {
  return (
    <TableHead>
      <TableRow>
        {tableHeaders.map((el: string) => 
          <style key={el}>{el}</style>
        )}
      </TableRow>
    </TableHead>
  );
};

export default TableHeaders;
