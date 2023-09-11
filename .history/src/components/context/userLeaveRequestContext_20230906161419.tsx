import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";
import { userLeaveRequestModel } from "../../interface/userLeaveRequestModel";

const UserLeaveRequestContext = createContext({} as userLeaveRequestModel)
export function LeavePlanProvider({ children }:propsModel) {
  

  return (<UserLeaveRequestContext.Provider>

  </UserLeaveRequestContext.Provider>)
}