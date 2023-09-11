import { FC, useContext } from "react";
import LeavePlanContext from "../../context/leavePlanContext";
import LeavePlanDetailsRow from "../../atoms/leavePlanDetailsRow/leavePlanDetailsRow";
import DetailsModel from "../../../interface/detailsInterface";

const LeavePlanDetails: FC = () => {
  const { state } = useContext(LeavePlanContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Start date leave.</td>
            <td>End date leave.</td>
            <td>Kind of leave.</td>
            <td>Replacement person.</td>
            <td>Number of days until the start of the leave.</td>
            <td>Number of days of leave.</td>
            <td>Leave status.</td>
            <td>Employee leave approval status.</td>
          </tr>
        </thead>
        <tbody>
 {state.dataRender.map((el: any) => (
          <LeavePlanDetailsRow key={Math.random()} details={el} />
        ))}
        </tbody>
       
      </table>
      {state.arrayErrorMessage.length != 0 ? (
        <div>
          <h3>"Warning List"</h3>
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
