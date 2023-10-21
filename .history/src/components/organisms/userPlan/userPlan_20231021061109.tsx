import LeaveForm from "../../molecules/leaveForm/leaveForm";
import { LeavePlanProvider } from "../../context/leavePlanContext";
import LeavePlanDetails from "../../molecules/leavePlanDetails/leavePlanDetails";
import { FC } from "react";
import LeaveRequestsAwaitingResponse from "../../molecules/leaveRequestsAwaitingResponse/leaveRequestsAwaitingResponse";

const UserPlan: FC = () => {
  return (
    <div>
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
