/* eslint-disable max-len */
/* eslint-disable arrow-parens */
import { useContext, useEffect, useState } from 'react';
import LeavePlanContext from '../../context/leavePlanContext';
import MenuListLeavePlan from '../../molecules/menuListLeavePlan/menuListLeavePlan';

/* eslint-disable react/prop-types */
function LeavePlanDetailsRow({ details }: object) {
  const [restStatus, setRestStatus] = useState('after rest');

  const { dayFun } = useContext(LeavePlanContext);
  const {
    personId, kindLeave, startDateOfLeave, endDateOfLeave, replacementPerson, leaveId, holidayWorkerApprovalStatus,
  } = details;

  const [objLeave] = dayFun(personId, leaveId);

  useEffect(() => {
    if (objLeave.howMuchTimeToStart < 0) {
      setRestStatus('during rest');
    } else if (objLeave.howMuchTimeToStart > 0) {
      setRestStatus('before rest');
    }
  }, [objLeave.howMuchTimeToStart]);
  // zabezpieczyć !!!
  return (
    <li>
      <p>{`${startDateOfLeave} | ${endDateOfLeave} | ${kindLeave} | ${replacementPerson} | ${objLeave.subtractDay} | ${objLeave.howMuchTimeToStart} | ${restStatus} | ${holidayWorkerApprovalStatus}`}</p>
      <MenuListLeavePlan leaveId={leaveId} />
    </li>
  );
}

export default LeavePlanDetailsRow;
