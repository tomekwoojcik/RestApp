import { createContext, useReducer } from "react";
import { propsModel } from "../../interface/interfaceProps";
import Data from "./localhostContext";
import { initState, reducer } from "../../hooks/userLeaveRequestHooks";

export interface userLeaveRequestModel {
  state: {
    
  };
}

const UserLeaveRequestContext = createContext(
  {} as userLeaveRequestModel["state"],
);
export function LeavePlanProvider({ children }: propsModel) {
  const [state, dispatch] = useReducer(reducer, initState);

  const leaveData: object = new Data("leaveConfirm");
  const string: object = {};

  return (
    <UserLeaveRequestContext.Provider
      value={{
        string,
        state,
      }}
    >
      {children}
    </UserLeaveRequestContext.Provider>
  );
}
