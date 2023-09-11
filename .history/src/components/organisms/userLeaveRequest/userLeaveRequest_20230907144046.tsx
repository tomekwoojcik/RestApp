import { FC } from "react";
import UserLeaveRequestList from "../../molecules/userLeaveRequestList/userLeaveRequestList";
import { UserLeaveRequestProvider } from "../../context/userLeaveRequestContext";

const UserLeaveRequest: FC = () => {
  return (
    <UserLeaveRequestProvider>
      <UserLeaveRequestList />
    </UserLeaveRequestProvider>
  );
};

export default UserLeaveRequest;
