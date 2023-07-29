/* eslint-disable max-len */
/* eslint-disable arrow-parens */
import { FC, useContext, useEffect, useState } from 'react';
import LeavePlanContext from '../../context/leavePlanContext';
import MenuListLeavePlan from '../../molecules/menuListLeavePlan/menuListLeavePlan';
import DetailsInterface from '../../../interface/detailsInterface';

/* eslint-disable react/prop-types */
const LeavePlanDetailsRow: FC = (details: object) => {
  const objDetails: DetailsInterface = details;
  const { personId, kindLeave, startDateOfLeave, endDateOfLeave, replacementPerson, leaveId, holidayWorkerApprovalStatus
  } = objDetails;
  
  const [restStatus, setRestStatus] = useState<string>('after rest');
  const { dayFun } = useContext(LeavePlanContext);
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
