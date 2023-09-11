import { FC, ReactNode, useContext } from "react";
import { UserLeaveRequestContext } from "../../context/userLeaveRequestContext";

const UserLeaveRequestList: FC = () => {
  const { state } = useContext(UserLeaveRequestContext);

  console.log( typeof state.leaveRequestDataArr)
  return (<table>
    {state.leaveRequestDataArr.map((el:object) => {
      console.log(el);
    })}
    </table>)
    
};

export default UserLeaveRequestList;
