import { TableRow, TablePagination, TableFooter } from "@mui/material";
import TablePaginationActions from "../tablePaginationActions/tablePaginationActions";
import { FC, useContext } from "react";
import { SupervisorContext } from "../../context/supervisorContext";
 
interface propsModel{
  arrLength:number
}

const FooterTable: FC<propsModel> = ({arrLength}) => {
  const { state, handleChangePage, handleChangeRowsPerPage } = useContext(
    SupervisorContext,
  );
  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          colSpan={3}
          count={arrLength}
          rowsPerPage={state.rowsPerPage}
          page={state.page}
          SelectProps={{
            inputProps: {
              "aria-label": "rows per page",
            },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </TableRow>
    </TableFooter>
  );
};

export default FooterTable;
