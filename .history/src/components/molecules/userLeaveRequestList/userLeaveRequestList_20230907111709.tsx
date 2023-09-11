import { FC, useRef } from 'react'
import { useAppDispach, useAppSelector } from '../../../store/store'

const UserLeaveRequestList: FC = () => {
    const leaveData = useRef<string>("");
    const dispatch = useAppDispach();

    const leaveRequest = useAppSelector((state) => state.leaveRequestSlice.confirmLeave)
    console.log(leaveRequest);
    return (
        <ul>
            
        </ul>
        <button onClick={()=>dispatch({getUserLeve})}
    )
}

export default UserLeaveRequestList