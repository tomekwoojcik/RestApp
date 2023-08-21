import { FC, useContext } from "react";
import LeavePlanContext from "../../context/leavePlanContext";
import LeavePlanDetailsRow from "../../atoms/leavePlanDetailsRow/leavePlanDetailsRow";

const LeavePlanDetails: FC = () => {
  const { state } = useContext(LeavePlanContext);
  console.log(state.arrayErrorMessage);
  return (
    <div>
      <ul>
        {state.dataRender.map(el => (
          <LeavePlanDetailsRow key={Math.random()} details={el.} />
        ))}
      </ul>
      {state.arrayErrorMessage.length != 0 ? (
        <div>
          <h3>Warning List</h3>
          <ul>
            {state.arrayErrorMessage.map(el => (
              <li key={Math.random()}>{el.warnMess}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default LeavePlanDetails;
