import { Paper, Table, TableContainer } from '@mui/material'
import { FC } from 'react'
import TableHeaders from '../../atoms/employeeTableHeaders/tableHeaders'

const LeaveTableAwaitingAndReject:FC = (table) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHeaders tableHeaders={table}/>
            </Table>
        </TableContainer>
    )
}

export default LeaveTableAwaitingAndReject