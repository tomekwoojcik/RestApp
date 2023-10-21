import { Paper, Table, TableContainer } from '@mui/material'
import { FC } from 'react'
import TableHeaders from '../../atoms/employeeTableHeaders/tableHeaders'
interface propsModel {
    tableHeaders: string[],
    styled: any,
}

const LeaveTableAwaitingAndReject: FC<propsModel> = ({ tableHeaders, styled }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHeaders StyledTableCell={styled} tableHeaders={tableHeaders}/>
            </Table>
        </TableContainer>
    )
}

export default LeaveTableAwaitingAndReject