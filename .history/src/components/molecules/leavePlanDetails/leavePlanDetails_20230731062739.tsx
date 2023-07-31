/* eslint-disable eqeqeq */
/* eslint-disable arrow-parens */
import { FC, useContext } from 'react';
import LeavePlanContext from '../../context/leavePlanContext';
import LeavePlanDetailsRow from '../../atoms/leavePlanDetailsRow/leavePlanDetailsRow';

interface PlanDetails{
  key: number
  details: {
    personId: string
  kindLeave: string
  startDateOfLeave: string
  endDateOfLeave: string
  replacementPerson: string
  leaveId: string
  holidayWorkerApprovalStatus: string
  }
}

const LeavePlanDetails: FC<PlanDetails> = () => {
  const { dataRender, warnMess } = useContext(LeavePlanContext);
  return (
    <div>
      <ul>
        {dataRender.map((el: object) => <LeavePlanDetailsRow
          key={Math.random()}
          details={el.details} />)}
      </ul>
      {warnMess.length != 0 ? (
        <div>
          <h3>Warning List</h3>
          <ul>
            {warnMess.map((el:object) => <li key={Math.random()}>{el.warnMess}</li>)}
          </ul>
        </div>
      ) : null}
    </div>

  );
}

export default LeavePlanDetails;
