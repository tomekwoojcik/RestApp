import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";
export interface userLeaveRequestModel {
    state: {
        string: object,
    };
}


const UserLeaveRequestContext = createContext({} as userLeaveRequestModel["state"]);
export function LeavePlanProvider({ children }: propsModel) {
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
