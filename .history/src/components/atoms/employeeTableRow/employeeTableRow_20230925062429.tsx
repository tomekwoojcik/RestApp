import { FC } from "react";
import { UserModel } from "../../../interface/responseModel";
interface SubordinatesRowProps {
  subordinatesObj: UserModel;
}

const EmployeeTableRow: FC<SubordinatesRowProps> = ({ subordinatesObj }) => {
    return <tr><td></td></tr>;
};

export default EmployeeTableRow;
