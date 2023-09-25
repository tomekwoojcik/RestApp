import { FC } from "react";
import { UserModel } from "../../../interface/responseModel";
import EmployeeTableRow from "../../atoms/employeeTableRow/employeeTableRow";

interface TableProps {
  [x: string]: any;
  subordinatesArr: UserModel[];
}

const EmployeeTable: FC<TableProps> = ({ subordinatesArr }) => {
  console.log(subordinatesArr);
  return (
    <table>
      <tbody>
        {subordinatesArr.map(
          (subordinatesObj: UserModel): UserModel => {
            <EmployeeTableRow
              key={subordinatesObj.id}
              subordinatesObj={subordinatesObj}
            />;
          },
        )}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
