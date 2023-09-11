import { FC } from 'react'
import { useAppSelector } from '../../../store/store'

const UserLeaveRequestList: FC = () => {
    const
    const leaveRequest = useAppSelector((state) => state.leaveRequestSlice.confirmLeave)
    console.log(leaveRequest);
    return (
        <ul>
            
        </ul>
    )
}

export default UserLeaveRequestList