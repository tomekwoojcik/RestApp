import { FC, useContext } from "react";
import LeavePlanContext from "../../context/leavePlanContext";
import LeavePlanDetailsRow from "../../atoms/leavePlanDetailsRow/leavePlanDetailsRow";
import DetailsModel from "../../../interface/detailsInterface";

const LeavePlanDetails: FC = () => {
  const { state } = useContext(LeavePlanContext);
  console.log(state.dataRender[0]);
  return (
    <div>
      <ul>
        {state.dataRender.map((el: object) => (
          <LeavePlanDetailsRow key={Math.random()} details={el as DetailsModel}  />
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