import { FC, ReactNode, useContext } from "react";
import { UserLeaveRequestContext, leaveObjModel } from "../../context/userLeaveRequestContext";

const UserLeaveRequestList: FC = () => {
  const { state } = useContext(UserLeaveRequestContext);

  return (
    <ul>
      {state.leaveRequestDataArr.map((el: leaveObjModel) => (
        <li key={el.id}>
          {el.dateOfApplication}
          {/* Add other properties you want to display */}
        </li>
      ))}
    </ul>
  );
};
    

export default UserLeaveRequestList;
