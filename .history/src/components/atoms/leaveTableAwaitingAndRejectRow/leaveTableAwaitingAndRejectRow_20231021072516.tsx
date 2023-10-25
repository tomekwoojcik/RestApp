import { FC } from 'react'
import { leaveObjModel } from '../../context/userLeaveRequestContext'
import { TableCell, TableRow } from '@mui/material'

interface propsModel{
    obj:leaveObjModel
}

const LeaveTableAwaitingAndRejectRow: FC<propsModel> = ({obj}) => {
    return (
        <TableRow><TableCell></TableCell></TableRow>
    )
}

export default LeaveTableAwaitingAndRejectRow