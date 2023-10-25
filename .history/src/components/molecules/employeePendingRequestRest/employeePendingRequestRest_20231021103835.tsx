import { FC } from 'react'
import { LeavePlanProvider } from '../../context/leavePlanContext'
import EmployeePendingRequestRestForm from '../employeePendingRequestRestForm/employeePendingRequestRestForm'

const EmployeePendingRequestRest:FC = () => {
    return (
        <LeavePlanProvider>
            <EmployeePendingRequestRestForm />
            <EmployeePendingRequestRestTable/>
        </LeavePlanProvider>
    )
}

export default EmployeePendingRequestRest