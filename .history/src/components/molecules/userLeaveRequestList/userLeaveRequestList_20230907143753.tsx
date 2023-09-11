import { FC, useContext } from 'react'
import { UserLeaveRequestContext } from '../../context/userLeaveRequestContext'

const UserLeaveRequestList: FC = () => {
    const { state } = useContext(UserLeaveRequestContext);
    console.log(state);
    return (
        <ul>
            
        </ul>
    )
}

export default UserLeaveRequestList