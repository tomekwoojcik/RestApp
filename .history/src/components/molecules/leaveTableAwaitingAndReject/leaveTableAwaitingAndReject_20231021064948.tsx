import { Paper, Table, TableContainer } from '@mui/material'
import { FC } from 'react'
import TableHeaders from '../../atoms/employeeTableHeaders/tableHeaders'

const LeaveTableAwaitingAndReject:FC = (tableHeaders) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHeaders tableHeaders={tableHeaders}/>
            </Table>
        </TableContainer>
    )
}

export default LeaveTableAwaitingAndReject