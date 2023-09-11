import { FC, useContext } from "react";
import { UserLeaveRequestContext } from "../../context/userLeaveRequestContext";

const UserLeaveRequestList: FC<object[]> = () => {
  const { state } = useContext(UserLeaveRequestContext);
  console.log(state.leaveRequestDataArr);
    return state.leaveRequestDataArr.map((el: any) => {
        console.log(el);
  });
};

export default UserLeaveRequestList;
