import { FC, ReactNode, useContext } from "react";
import { UserLeaveRequestContext } from "../../context/userLeaveRequestContext";

const UserLeaveRequestList: FC = () => {
  const { state } = useContext(UserLeaveRequestContext);

  console.log( typeof state.leaveRequestDataArr)
  return (<table>
    </table>)
    
};

export default UserLeaveRequestList;
