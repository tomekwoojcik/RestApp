import { FC, ReactNode, useContext } from "react";
import { UserLeaveRequestContext, leaveObjModel } from "../../context/userLeaveRequestContext";
import UserLeaveRequestRow from "../../atoms/userLeaveRequestRow/userLeaveRequestRow";

const UserLeaveRequestList: FC = () => {
  const { state } = useContext(UserLeaveRequestContext);

  return (<ul>
    {state.leaveRequestDataArr((el: leaveObjModel) => {
      return el.dateOfApplication;
    })}
  </ul>)
    
};

export default UserLeaveRequestList;
