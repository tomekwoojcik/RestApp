import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";
import { userLeaveRequestModel } from "../../interface/userLeaveRequestModel";

const UserLeaveRequestContext = createContext({} as userLeaveRequestModel);
export function LeavePlanProvider({ children }: propsModel) {
  const x = "x"
  return (
    <UserLeaveRequestContext.Provider value={x}>
      {children}
    </UserLeaveRequestContext.Provider>
  );
}
