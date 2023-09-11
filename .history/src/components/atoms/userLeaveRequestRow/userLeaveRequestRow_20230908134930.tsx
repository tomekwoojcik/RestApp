import { FC } from 'react'
import { leaveObjModel } from '../../context/userLeaveRequestContext';

interface propsModel {
    key: string,
    props:leaveObjModel
}

const UserLeaveRequestRow: FC<propsModel> = (props) => {
    console.log(props);

    return (
        <p>{props.props.kindLeave}</p>
    );  
}

export default UserLeaveRequestRow