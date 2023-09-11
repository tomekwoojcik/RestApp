import { createContext, useEffect, useReducer } from "react";
import { propsModel } from "../../interface/interfaceProps";
import Data from "./localhostContext";
import {
  REDUCER_ACTION_TYPE,
  initState,
  reducer,
} from "../../hooks/userLeaveRequestHooks";

export interface leaveObjModel{
  dateOfApplication
: 
"2023-08-22T03:58:45.056Z"
endDateOfLeave
: 
"2023-08-26T03:58:31.000Z"
holidayWorkerApprovalStatus
: 
"planned"
kindLeave
: 
"Unpaid Leave"
leaveId
: 
"kAIE-xvCri"
personId
: 
1
replacementPerson
: 
"John Brzezinski"
startDateOfLeave
: 
"2023-09-12T03:58:31.000Z"
supervisorApprovalStatus
: 
null
supervisorComment
: 
null
}

export interface userLeaveRequestModel {
  state: {
    leaveRequestDataArr: object[];
  };
}

export const UserLeaveRequestContext = createContext(
  {} as userLeaveRequestModel,
);
export function UserLeaveRequestProvider({ children }: propsModel) {
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
