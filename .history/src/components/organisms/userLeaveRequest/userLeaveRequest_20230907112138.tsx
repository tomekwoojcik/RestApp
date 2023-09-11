import { FC } from "react";
import UserLeaveRequestList from "../../molecules/userLeaveRequestList/userLeaveRequestList";
import { Provider } from "react-redux";

const UserLeaveRequest:FC = ()=> {
  return (
    <Provider>
      <UserLeaveRequestList />
      </Provider>
    );
}

export default UserLeaveRequest;
