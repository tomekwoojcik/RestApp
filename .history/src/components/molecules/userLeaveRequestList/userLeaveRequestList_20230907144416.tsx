import { FC, useContext } from 'react'
import { UserLeaveRequestContext } from '../../context/userLeaveRequestContext'

const UserLeaveRequestList: FC = () => {
    const { state } = useContext(UserLeaveRequestContext);
    console.log(state);
    return (
        state.leaveRequestDataArr.map((el:any) => {
            return <tr>{<td>{ el.}</td> }</tr>
        })
    
        
    )
}

export default UserLeaveRequestList