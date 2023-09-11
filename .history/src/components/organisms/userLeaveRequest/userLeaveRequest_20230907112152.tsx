import { FC } from "react";
import UserLeaveRequestList from "../../molecules/userLeaveRequestList/userLeaveRequestList";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

const UserLeaveRequest: FC = () => {
  return (
    <Provider store={store}>
      <UserLeaveRequestList />
    </Provider>
  );
};

export default UserLeaveRequest;
