/* eslint-disable eqeqeq */
/* eslint-disable arrow-parens */
import { useContext } from 'react';
import LeavePlanContext from '../../context/leavePlanContext';
import LeavePlanDetailsRow from '../../atoms/leavePlanDetailsRow/leavePlanDetailsRow';

interface DetailsInterface {
  key: number
  personId: string
  kindLeave: string
  startDateOfLeave:any
  endDateOfLeave: any
  replacementPerson: any
  leaveId: any
}


function LeavePlanDetails() {
  const { dataRender, warnMess } = useContext(LeavePlanContext);
  return (
    <div>
      <ul>
        {dataRender.map((el: any) => <LeavePlanDetailsRow
          key={Math.random()}
          details={
            {
          personId: el.personId,
          kindLeave:el.kindLeave,
          startDateOfLeave:el.startDateOfLeave,
          endDateOfLeave:el.endDateOfLeave,
          replacementPerson:el.replacementPerson,
              leaveId: el.leaveId,
              holidayWorkerApprovalStatus: ''
            }:object}/>)}
      </ul>
      {warnMess.length != 0 ? (
        <div>
          <h3>Warning List</h3>
          <ul>
            {warnMess.map((el:any) => <li key={Math.random()}>{el.warnMess}</li>)}
          </ul>
        </div>
      ) : null}
    </div>

  );
}

export default LeavePlanDetails;
