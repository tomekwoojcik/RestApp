/* eslint-disable max-len */
/* eslint-disable arrow-parens */
import { useContext, useEffect, useState } from 'react';
import LeavePlanContext from '../../context/leavePlanContext';
import MenuListLeavePlan from '../../molecules/menuListLeavePlan/menuListLeavePlan';
interface DetailsInterface{
  personId: string
  kindLeave: string
  startDateOfLeave: string
  endDateOfLeave: string
  replacementPerson: string
  leaveId: string
  holidayWorkerApprovalStatus: string
  details: any

}
/* eslint-disable react/prop-types */
function LeavePlanDetailsRow( details: DetailsInterface ) {
  const [restStatus, setRestStatus] = useState<string>('after rest');
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
  }, [objLeave?.howMuchTimeToStart]);
  // zabezpieczyć !!!
  return (
    <li>
      <p>{`${startDateOfLeave} | ${endDateOfLeave} | ${kindLeave} | ${replacementPerson} | ${objLeave?.subtractDay} | ${objLeave?.howMuchTimeToStart} | ${restStatus} | ${holidayWorkerApprovalStatus}`}</p>
      <MenuListLeavePlan leaveId={leaveId} />
    </li>
  );
}

export default LeavePlanDetailsRow;
