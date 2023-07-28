/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
/* eslint-disable arrow-parens */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import LeaveForm from '../../molecules/leaveForm/leaveForm';
import { LeavePlanProvider } from '../../context/leavePlanContext';
import LeavePlanDetails from '../../molecules/leavePlanDetails/leavePlanDetails';

function UserPlan() {
  return (
    <div>
      <LeavePlanProvider>
        <LeaveForm />
        <p>Planned rest</p>
        <LeavePlanDetails />
      </LeavePlanProvider>

    </div>
  );
}

export default UserPlan;
