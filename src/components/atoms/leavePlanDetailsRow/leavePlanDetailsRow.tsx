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
}
/* eslint-disable react/prop-types */
function LeavePlanDetailsRow( details: DetailsInterface ) {
  const [restStatus, setRestStatus] = useState<string>('after rest');
  const { dayFun } = useContext(LeavePlanContext);

  const [objLeave] = dayFun(details.personId, details.leaveId);
  console.log(details);

  useEffect(() => {
    if (objLeave?.howMuchTimeToStart < 0) {
      setRestStatus('during rest');
    } else if (objLeave?.howMuchTimeToStart > 0) {
      setRestStatus('before rest');
    }
  }, [objLeave?.howMuchTimeToStart]);
  // zabezpieczyć !!!
  return (
    <li>
      <p>{`${details.startDateOfLeave} | ${details.endDateOfLeave} | ${details.kindLeave} | ${details.replacementPerson} | ${objLeave?.subtractDay} | ${objLeave?.howMuchTimeToStart} | ${restStatus} | ${details.holidayWorkerApprovalStatus}`}</p>
      <MenuListLeavePlan leaveId={details.leaveId} />
    </li>
  );
}

export default LeavePlanDetailsRow;
