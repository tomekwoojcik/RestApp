import { FC } from "react"
import { UserModel } from "../../../interface/responseModel"
import EmployeeTableRow from "../../atoms/employeeTableRow/employeeTableRow"

interface TableProps {
    [x: string]: any
    subordinatesArr:UserModel[]
}

const EmployeeTable: FC<TableProps> = subordinatesArr => {
    console.log(subordinatesArr);
    return (
        <table>
            {
                subordinatesArr.map((subordinatesObj: UserModel) => {
                    <EmployeeTableRow key={subordinatesObj.id} subordinatesObj={subordinatesObj}/>
                })
            }

        </table>
            
        
    )
}

export default EmployeeTable