import { FC, useContext } from "react";
import LeavePlanContext from "../../context/leavePlanContext";
import LeavePlanTable from "../leavePlanTable/leavePlanTable";
import TablePaginationActionsPlanDetails from "../../atoms/tablePaginationActionsPlanDetails/tablePaginationActionsPlanDetails";

const LeavePlanDetails: FC = () => {
  const {
    state,
    tableHeaders,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useContext(LeavePlanContext);
  return (
    <div>
      {state.dataRender.length != 0 ? (
        <LeavePlanTable
          tableHeaders={tableHeaders}
          arr={state.dataRender}
          rowsPerPage={state.rowsPerPage}
          page={state.page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          rowComponent={"planDetails"}
          pagination={TablePaginationActionsPlanDetails} supervisorMenu={undefined}           />
      ) : (
        <p>Select the days you want to plan your vacation.</p>
      )}
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
