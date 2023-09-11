import { FC, ReactNode, useContext } from "react";
import { UserLeaveRequestContext } from "../../context/userLeaveRequestContext";
import UserLeaveRequestRow from "../../atoms/userLeaveRequestRow/userLeaveRequestRow";

const UserLeaveRequestList: FC = () => {
  const { state } = useContext(UserLeaveRequestContext);

  return (<table>
    </table>)
    
};

export default UserLeaveRequestList;
