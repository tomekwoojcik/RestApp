import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";
import { MenuButtonModel } from "./userContext";
import { getUsersResource, UsersResourceModel } from "./UserResourceApi";

export interface SupervisorModel {
  supervisorButtons: MenuButtonModel[];
  subordinatesArr: UsersResourceModel;
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

  return (
    <SupervisorContext.Provider
      value={{ supervisorButtons, subordinatesArr}}
    >
      {children}
    </SupervisorContext.Provider>
  );
}
