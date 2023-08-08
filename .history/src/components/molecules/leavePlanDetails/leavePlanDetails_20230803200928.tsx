/* eslint-disable eqeqeq */
/* eslint-disable arrow-parens */
import { FC, useContext } from 'react';
import LeavePlanContext from '../../context/leavePlanContext';
import LeavePlanDetailsRow from '../../atoms/leavePlanDetailsRow/leavePlanDetailsRow';

interface LeavePlanDetailsInterface {
   personId: string
   kindLeave: string
   startDateOfLeave: string
   endDateOfLeave: string
   replacementPerson: string
   leaveId: string
   holidayWorkerApprovalStatus: string
}

interface PropsInterface {
  el: object,
}

const LeavePlanDetails: FC = () => {
  const { dataRender, warnMess } = useContext(LeavePlanContext);
  return (
    <div>
      <ul>
        {dataRender.map((el: object) =>
          <LeavePlanDetailsRow
          key={Math.random()}
          details={el} />)}
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
