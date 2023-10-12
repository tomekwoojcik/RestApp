import { FC } from 'react'

interface propsModel {
    leaveId: string;
    employeeId: string | number;
}

const SupervisorMenuForRowDetails:FC<propsModel> = () => {
    return (
         <div style={{width:"10px", height:"10px", background:"red"}}>
            
        </div>
    )
}

export default SupervisorMenuForRowDetails