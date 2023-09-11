import { FC, useRef } from "react";
import { useAppDispach, useAppSelector } from "../../../store/store";
import { Provider } from "react-redux";
import { getUserLeaveConfirm } from "../../../store/features/userLeaveRequestSlice";

const UserLeaveRequestList: FC = () => {
  const leaveData = useRef<string>("");
  const dispatch = useAppDispach();

  const leaveRequest = useAppSelector(
    state => state.leaveRequestSlice.confirmLeave,
  );
  console.log(leaveRequest);
  return (
    <div>
          <ul></ul>
          <button onClick={()=>dispatch(getUserLeaveConfirm({}))>refresh</button>
    </div>
  );
};

export default UserLeaveRequestList;
