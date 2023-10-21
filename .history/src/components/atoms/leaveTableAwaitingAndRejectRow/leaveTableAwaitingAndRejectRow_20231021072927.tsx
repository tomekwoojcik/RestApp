import { FC } from 'react'
import { leaveObjModel } from '../../context/userLeaveRequestContext'
import { TableCell, TableRow } from '@mui/material'

interface propsModel{
    obj:leaveObjModel
}

const LeaveTableAwaitingAndRejectRow: FC<propsModel> = ({obj}) => {
    return (
        <TableRow>
            <TableCell>{obj.startDateOfLeave}</TableCell>
            <TableCell>{obj.endDateOfLeave}</TableCell>
            <TableCell>{obj.kindLeave}</TableCell>
            <TableCell>{obj.holidayWorkerApprovalStatus}</TableCell>
            <TableCell>{obj.replacementPerson}</TableCell>
            <TableCell>{obj.supervisorApprovalStatus}</TableCell>
            <TableCell>{obj.supervisorComment}</TableCell>
        </TableRow>
    )
}

export default LeaveTableAwaitingAndRejectRow