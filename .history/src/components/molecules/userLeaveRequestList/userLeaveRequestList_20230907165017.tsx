import { FC, ReactNode, useContext } from "react";
import { UserLeaveRequestContext } from "../../context/userLeaveRequestContext";
import UserLeaveRequestRow from "../../atoms/userLeaveRequestRow/userLeaveRequestRow";

const UserLeaveRequestList: FC = () => {
  const { state } = useContext(UserLeaveRequestContext);

  const objarr: object[]=[{},{},{} ]
  return (<table>
    {objarr.map((el:object) :object=>{el})}
    </table>)
    
};

export default UserLeaveRequestList;
