import { TableRow, TablePagination } from "@mui/material"
import TablePaginationActions from "../tablePaginationActions/tablePaginationActions"
import { FC } from "react"

interface propsModel {
    length: number;
    rowsPerPage: number;
    page: number;
    
}

const TableFooter: FC<propsModel> = ({ length, rowsPerPage, page}) => {
    return (
        <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
    )
}

export default TableFooter