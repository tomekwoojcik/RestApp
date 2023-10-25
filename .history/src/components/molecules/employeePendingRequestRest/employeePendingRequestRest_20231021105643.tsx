import { FC } from 'react'
import { LeavePlanProvider } from '../../context/leavePlanContext'
import EmployeePendingRequestRestForm from '../employeePendingRequestRestForm/employeePendingRequestRestForm'
import EmployeePendingRequestRestTable from '../employeePendingRequestRestTable/employeePendingRequestRestTable'

const EmployeePendingRequestRest:FC = () => {
    return (
        <LeavePlanProvider>
            <div>
            <EmployeePendingRequestRestTable />
                <EmployeePendingRequestRestForm />
                </div>

        </LeavePlanProvider>
    )
}

export default EmployeePendingRequestRest