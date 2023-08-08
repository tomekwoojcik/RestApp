/* eslint-disable max-len */
/* eslint-disable arrow-parens */
import { FC, useContext, useEffect, useState } from 'react';
import LeavePlanContext from '../../context/leavePlanContext';
import MenuListLeavePlan from '../../molecules/menuListLeavePlan/menuListLeavePlan';

interface DestructDetailsInterface{
  personId: string
  kindLeave: string
  startDateOfLeave: string
  endDateOfLeave: string
  replacementPerson: string
  leaveId: string
  holidayWorkerApprovalStatus: string
}

interface DetailsInterface{
  key: number,
  details: DestructDetailsInterface
}

/* eslint-disable react/prop-types */
const LeavePlanDetailsRow: FC<DestructDetailsInterface> = (details) => {  
  const [restStatus, setRestStatus] = useState<string>('after rest');
  const { dayFun } = useContext(LeavePlanContext);
  const { personId, kindLeave, startDateOfLeave, endDateOfLeave, replacementPerson, leaveId, holidayWorkerApprovalStatus}:DestructDetailsInterface = details
  const [objLeave] = dayFun(personId, leaveId);

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
      <p>{`${startDateOfLeave} | ${endDateOfLeave} | ${kindLeave} | ${replacementPerson} | ${objLeave?.subtractDay} | ${objLeave?.howMuchTimeToStart} | ${restStatus} | ${holidayWorkerApprovalStatus}`}</p>
      <MenuListLeavePlan leaveId={leaveId} />
    </li>
  );
}

export default LeavePlanDetailsRow;
