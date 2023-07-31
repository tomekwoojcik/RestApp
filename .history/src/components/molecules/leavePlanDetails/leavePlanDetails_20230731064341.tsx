/* eslint-disable eqeqeq */
/* eslint-disable arrow-parens */
import { FC, useContext } from 'react';
import LeavePlanContext from '../../context/leavePlanContext';
import LeavePlanDetailsRow from '../../atoms/leavePlanDetailsRow/leavePlanDetailsRow';

interface LeavePlanDetailsInterface {
  details: object;
}

interface WarnMessInterface {
    warnMess: ReactNode;
    el: object,
}

const LeavePlanDetails: FC<LeavePlanDetailsInterface> = () => {
  const { dataRender, warnMess } = useContext(LeavePlanContext);
  return (
    <div>
      <ul>
        {dataRender.map((el: object) => <LeavePlanDetailsRow
          key={Math.random()}
          details={el} />)}
      </ul>
      {warnMess.length != 0 ? (
        <div>
          <h3>Warning List</h3>
          <ul>
            {warnMess.map((el:WarnMessInterface) => <li key={Math.random()}>{el.warnMess}</li>)}
          </ul>
        </div>
      ) : null}
    </div>

  );
}

export default LeavePlanDetails;
