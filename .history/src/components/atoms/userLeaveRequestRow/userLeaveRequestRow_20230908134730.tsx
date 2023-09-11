import { FC } from 'react'
import { leaveObjModel } from '../../context/userLeaveRequestContext';

interface propsModel {
    key: string,
    el:leaveObjModel
}

const UserLeaveRequestRow: FC<propsModel> = (props: leaveObjModel) => {
    const {key, el}:propsModel = props

    return (
        
    );
}

export default UserLeaveRequestRow