import { FC } from "react";
import UserLeaveRequestList from "../../molecules/userLeaveRequestList/userLeaveRequestList";
import { UserLeaveRequestProvider } from "../../context/userLeaveRequestContext";
import { Typography } from "@mui/material";

const UserLeaveRequest: FC = () => {
  return (
    <UserLeaveRequestProvider>
        <UserLeaveRequestList />
    </UserLeaveRequestProvider>
  );
};

export default UserLeaveRequest;
