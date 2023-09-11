import { FC, ReactNode, useContext } from "react";
import { UserLeaveRequestContext } from "../../context/userLeaveRequestContext";
import UserLeaveRequestRow from "../../atoms/userLeaveRequestRow/userLeaveRequestRow";

const UserLeaveRequestList: FC = () => {
  const { state } = useContext(UserLeaveRequestContext);

  const objarr: string[] = [ "SSSSSS", "xxxxx", "sccccc"];
  return (<table>
    {objarr.map((el: any) => { <p>{el}</p>})}
    </table>)
    
};

export default UserLeaveRequestList;
