import { FC, useContext } from "react";
import { UserLeaveRequestContext } from "../../context/userLeaveRequestContext";

interface leaveRequestModel {
    
}

const UserLeaveRequestList: FC = () => {
  const { state } = useContext(UserLeaveRequestContext);
  console.log(state.leaveRequestDataArr);
    return state.leaveRequestDataArr.map((el: leaveRequestModel) => {
        console.log(el);
  });
};

export default UserLeaveRequestList;
