/* eslint-disable eqeqeq */
/* eslint-disable arrow-parens */
import { useContext } from 'react';
import LeavePlanContext from '../../context/leavePlanContext';
import LeavePlanDetailsRow from '../../atoms/leavePlanDetailsRow/leavePlanDetailsRow';

interface DetailsInterface {
  details: object;
}

function LeavePlanDetails() {
  const { dataRender, warnMess } = useContext(LeavePlanContext);
  return (
    <div>
      <ul>
        {dataRender.map(el => <LeavePlanDetailsRow key={Math.random()} details={el.details} />)}
      </ul>
      {warnMess.length != 0 ? (
        <div>
          <h3>Warning List</h3>
          <ul>
            {warnMess.map(el => <li key={Math.random()}>{el.warnMess}</li>)}
          </ul>
        </div>
      ) : null}
    </div>

  );
}

export default LeavePlanDetails;
