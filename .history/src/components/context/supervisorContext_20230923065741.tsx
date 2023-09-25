import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";
import { MenuButtonModel } from "./userContext";
import { getUsersResource, UsersResourceModel } from "./UserResourceApi";
import Data from "./localhostContext";
import { foo } from "./loginPageContext";
export interface SupervisorModel {
  supervisorButtons: MenuButtonModel[];
  foo: any
}

  const userToken = localStorage.getItem("userToken");


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

export const SupervisorContext = createContext({} as SupervisorModel);

export function SupervisorProvider({ children }: propsModel) {
  const x: string = "cccc";
  const subordinatesArr = getUsersResource(userToken);
  console.log(subordinatesArr);
  return (
    <SupervisorContext.Provider
      value={{ supervisorButtons }}
    >
      {children}
    </SupervisorContext.Provider>
  );
}
