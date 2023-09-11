import { FC, ReactNode, useContext } from "react";
import { UserLeaveRequestContext } from "../../context/userLeaveRequestContext";

const UserLeaveRequestList: FC = () => {
  const { state } = useContext(UserLeaveRequestContext);
  return (<table>
    {state.leaveRequestDataArr.map((el) => {
      console.log(typeof el); 
      }}
    </table>)
    
};

export default UserLeaveRequestList;
