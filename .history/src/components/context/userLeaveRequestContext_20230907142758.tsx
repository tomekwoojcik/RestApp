import { createContext, useEffect, useReducer } from "react";
import { propsModel } from "../../interface/interfaceProps";
import Data from "./localhostContext";
import {
  REDUCER_ACTION_TYPE,
  initState,
  reducer,
} from "../../hooks/userLeaveRequestHooks";

export interface userLeaveRequestModel {
  state: {};
}

const UserLeaveRequestContext = createContext(
  {} as userLeaveRequestModel["state"],
);
export function LeavePlanProvider({ children }: propsModel) {
  const [state, dispatch] = useReducer(reducer, initState);
  const leaveData = new Data("leaveConfirm");

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
