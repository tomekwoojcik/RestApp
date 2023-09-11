import { FC, ReactNode, useContext } from "react";
import { UserLeaveRequestContext, leaveObjModel } from "../../context/userLeaveRequestContext";

const UserLeaveRequestList: FC = () => {
  const { state } = useContext(UserLeaveRequestContext);

  return (<ul>
    {state.leaveRequestDataArr((el: leaveObjModel) => {
      return el.dateOfApplication;
    })}
  </ul>)
    
};

export default UserLeaveRequestList;
