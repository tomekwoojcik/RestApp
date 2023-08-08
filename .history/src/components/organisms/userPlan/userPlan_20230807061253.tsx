import LeaveForm from "../../molecules/leaveForm/leaveForm";
import { LeavePlanProvider } from "../../context/leavePlanContext";
import LeavePlanDetails from "../../molecules/leavePlanDetails/leavePlanDetails";
import { FC } from "react";

const UserPlan: FC = () => {
  return (
    <div>
      <LeavePlanProvider>
        <LeaveForm />
        <p>Planned rest</p>
        <LeavePlanDetails />
      </LeavePlanProvider>
    </div>
  );
};

export default UserPlan;
