import { TableRow, TablePagination, TableFooter } from "@mui/material";
import { FC } from "react";

interface propsModel {
  arrLength: number;
  rowsPerPage: number;
  page: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => void;
  onRowsPerPageChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  paginationComponent: any;
}

const FooterTable: FC<propsModel> = ({
  arrLength,
  rowsPerPage,
  page,
  onPageChange,
  onRowsPerPageChange,
  paginationComponent,
}) => {
  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          colSpan={3}
          count={arrLength}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              "aria-label": "rows per page",
            },
            native: true,
          }}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          ActionsComponent={paginationComponent}
        />
      </TableRow>
    </TableFooter>
  );
};

export default FooterTable;
