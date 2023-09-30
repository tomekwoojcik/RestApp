import { FC, useContext } from "react";
import LeavePlanContext from "../../context/leavePlanContext";
import LeavePlanTable from "../leavePlanTable/leavePlanTable";

const LeavePlanDetails: FC = () => {
  const { state, tableHeaders } = useContext(LeavePlanContext);
  return (
    <div>
      {state.dataRender.length != 0 ?
        <LeavePlanTable  tableHeaders = {tableHeaders} arr={state.dataRender} rowsPerPage={state.rowsPerPage} page={state.page} /> : <p>Select the days you want to plan your vacation.</p>}
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
