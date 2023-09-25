import { createContext, useReducer } from "react";
import { propsModel } from "../../interface/interfaceProps";
import { MenuButtonModel } from "./userContext";
import { getUsersResource } from "./UserResourceApi";
import Data from "./localhostContext";
import { UserModel } from "../../interface/responseModel";
import {
  initState,
  reducer,
  REDUCER_ACTION_TYPE
} from "../../hooks/supervisorHooks";
export interface SupervisorModel {
  state: {
    subordinatesArr: UserModel[];
  }
}

export const supervisorButtons: MenuButtonModel[] = [
  {
    key: 1,
    buttonName: "Workers list.",
    routes: "workersList",
  },
  {
    key: 2,
    buttonName: "Submit a leave request.",
    routes: "request",
  },
  {
    key: 3,
    buttonName: "Messages",
    routes: "messages",
  },
  {
    key: 4,
    buttonName: "User Details",
    routes: "userDetails",
  },
];
const userToken: string | any = localStorage.getItem("userToken");

export const SupervisorContext = createContext({} as SupervisorModel);

export async function SupervisorProvider({ children }: propsModel) {
  const [state, dispatch] = useReducer(reducer, initState);
  const userData = new Data("user");
  const getUserData: UserModel = userData.getData();
  const subordinatesArr: UserModel[] = (
    await getUsersResource(userToken)
  ).data.filter(
    (userObj: UserModel) =>
      userObj.company && userObj.company.supervisorId == getUserData.id,
  );
  dispatch({
    type: REDUCER_ACTION_TYPE.GET_SUBORDINATES,
    payload: subordinatesArr,
  });
  return (
    <SupervisorContext.Provider value={{ state }}>
      {children}
    </SupervisorContext.Provider>
  );
}
