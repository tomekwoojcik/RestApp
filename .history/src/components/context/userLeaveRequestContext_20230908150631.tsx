import { createContext, useEffect, useReducer } from "react";
import { propsModel } from "../../interface/interfaceProps";
import Data from "./localhostContext";
import {
  REDUCER_ACTION_TYPE,
  initState,
  reducer,
} from "../../hooks/userLeaveRequestHooks";

export interface leaveObjModel {
  dateOfApplication: string,
  endDateOfLeave: string,
  holidayWorkerApprovalStatus: string,
  kindLeave: string,
  leaveId: string,
  personId: number,
  replacementPerson: string,
  startDateOfLeave: string,
  supervisorApprovalStatus: null,
  supervisorComment: null,
}

export interface userLeaveRequestModel {
  state: {
    leaveRequestDataArr: leaveObjModel[];
  };
}

export const UserLeaveRequestContext = createContext(
  {} as userLeaveRequestModel,
);
export function UserLeaveRequestProvider({ children }: propsModel) {
  const [state, dispatch] = useReducer(reducer, initState);
  const leaveData = new Data("leaveConfirm");

  const cancelConfirmLeave = () => {
    pro
  }

  useEffect(() => {
    const renderLeaveRequest = () => {
      dispatch({
        type: REDUCER_ACTION_TYPE.GET_LEAVE_DATA,
        payload: leaveData.getData(),
      });
    };
    renderLeaveRequest();
  }, []);

  return (
    <UserLeaveRequestContext.Provider
      value={{
        state,
      }}
    >
      {children}
    </UserLeaveRequestContext.Provider>
  );
}