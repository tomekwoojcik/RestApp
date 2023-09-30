import { TableRow, TablePagination } from "@mui/material"
import TablePaginationActions from "../tablePaginationActions/tablePaginationActions"
import { FC, useContext } from "react"
import { SupervisorContext } from "../../context/supervisorContext"

const TableFooter: FC = () => {
    
    const {state, handleChangePage, handleChangeRowsPerPage} = useContext(SupervisorContext);
    return (
        <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={state.subordinatesArr.length}
              rowsPerPage={state.rowsPerPage}
              page={state.page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions }
            />
          </TableRow>
        </TableFooter>
    )
}

export default TableFooter