import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";
import Data from "./localhostContext";

export interface userLeaveRequestModel {
    state: {
        string: object,
    };
}


const UserLeaveRequestContext = createContext({} as userLeaveRequestModel["state"]);
export function LeavePlanProvider({ children }: propsModel) {
  const [state, dispatch] = 
  const leaveData: object = new Data('leaveConfirm');
  const string: object = {};
  return (
    <UserLeaveRequestContext.Provider
      value={{
        string,
      }}
    >
      {children}
    </UserLeaveRequestContext.Provider>
  );
}
