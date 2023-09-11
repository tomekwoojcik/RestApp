import { createContext, useEffect, useReducer } from "react";
import { propsModel } from "../../interface/interfaceProps";
import Data from "./localhostContext";
import {
  REDUCER_ACTION_TYPE,
  initState,
  reducer,
} from "../../hooks/userLeaveRequestHooks";

export interface leaveObjModel {
  dateOfApplication: string;
  endDateOfLeave: string;
  holidayWorkerApprovalStatus: string;
  kindLeave: string;
  leaveId: string;
  personId: number;
  replacementPerson: string;
  startDateOfLeave: string;
  supervisorApprovalStatus: null;
  supervisorComment: null;
}

export interface userLeaveRequestModel {
  state: {
    leaveRequestDataArr: leaveObjModel[];
  };
  cancelConfirmLeave: (id: string) => void;
}

export const UserLeaveRequestContext = createContext(
  {} as userLeaveRequestModel,
);
export function UserLeaveRequestProvider({ children }: propsModel) {
  const [state, dispatch] = useReducer(reducer, initState);
  const leaveData = new Data("leaveConfirm");
  const cancelConfirmLeaveData = new Data("cancelConfirmLeaveData");

  const cancelObj = (leaveId: string): void => {
    const data = cancelConfirmLeaveData.getData();
    const leaveObj = leaveData.getData().filter((obj: leaveObjModel) => obj.leaveId == leaveId);
    cancelConfirmLeaveData.setData([...data, ...leaveObj])

  }

  const cancelConfirmLeave = (leaveId: string): void => {
    cancelObj(leaveId);
    const filterArr: leaveObjModel[] = leaveData
      .getData()
      .filter((el: leaveObjModel) => el.leaveId != leaveId);

    leaveData.setData(filterArr);
    dispatch({
      type: REDUCER_ACTION_TYPE.COUNTER,
      payload: state.renderCount += 1,
    });
  };


  useEffect(() => {
    const renderLeaveRequest = () => {
      dispatch({
        type: REDUCER_ACTION_TYPE.GET_LEAVE_DATA,
        payload: leaveData.getData(),
      });
    };
    renderLeaveRequest();
  }, [state.renderCount]);

  return (
    <UserLeaveRequestContext.Provider
      value={{
        state,
        cancelConfirmLeave,
      }}
    >
      {children}
    </UserLeaveRequestContext.Provider>
  );
}
