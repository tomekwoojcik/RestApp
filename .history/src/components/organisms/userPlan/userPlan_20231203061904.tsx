import LeaveForm from "../../molecules/leaveForm/leaveForm";
import { LeavePlanProvider } from "../../context/leavePlanContext";
import LeavePlanDetails from "../../molecules/leavePlanDetails/leavePlanDetails";
import { FC } from "react";
import LeaveRequestsAwaitingResponse from "../../molecules/leaveRequestsAwaitingResponse/leaveRequestsAwaitingResponse";
import userPlanModule from "./UserApp.module.scss";
const UserPlan: FC = () => {
  return (
    <div className={userPlanModule.userAppDiv}>
      <LeavePlanProvider>
        <LeaveForm />
        <p>Planned rest</p>
        <LeavePlanDetails />
        <LeaveRequestsAwaitingResponse/>
      </LeavePlanProvider>
    </div>
  );
};

export default UserPlan;
