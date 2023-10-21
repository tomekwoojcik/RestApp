import { Paper, Table, TableContainer } from '@mui/material'
import { FC } from 'react'
import TableHeaders from '../../atoms/employeeTableHeaders/tableHeaders'

const LeaveTableAwaitingAndReject:FC = () => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHeaders/>
            </Table>
        </TableContainer>
    )
}

export default LeaveTableAwaitingAndReject