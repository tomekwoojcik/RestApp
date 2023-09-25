import { FC } from "react"
import { UserModel } from "../../../interface/responseModel"
import EmployeeTableRow from "../../atoms/employeeTableRow/employeeTableRow"

interface TableProps {
    subordinatesArr:UserModel[]
}

const EmployeeTable:FC<TableProps> = (subordinatesArr) => {
    return (
        <table>
            {
                subordinatesArr.map((subordinatesObj: UserModel) => {
                    <EmployeeTableRow subordinatesObj={subordinatesObj}/>
                })
            }

        </table>
            
        
    )
}

export default EmployeeTable