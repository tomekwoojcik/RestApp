import { Paper, Table, TableContainer } from '@mui/material'
import { FC } from 'react'
import TableHeaders from '../../atoms/employeeTableHeaders/tableHeaders'
interface propsModel {
    tableHeaders: string[],
}

const LeaveTableAwaitingAndReject: FC<propsModel> = ({ tableHeaders }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHeaders StyledTableCell={} tableHeaders={tableHeaders}/>
            </Table>
        </TableContainer>
    )
}

export default LeaveTableAwaitingAndReject