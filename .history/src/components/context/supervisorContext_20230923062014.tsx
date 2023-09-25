import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";
import { MenuButtonModel } from "./userContext";
import Data from "./localhostContext";
import { getUsersResource, UsersResourceModel } from "./UserResourceApi";
export interface SupervisorModel {
  supervisorButtons: MenuButtonModel[];
getUserTokenLocalStorage: string | null;
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


export const SupervisorContext = createContext({} as SupervisorModel);

export function SupervisorProvider({ children }: propsModel) {
  const getUserTokenLocalStorage: string | null = localStorage.getItem("userToken");
  console.log(getUserTokenLocalStorage);
  const x: string = "cccc";

  return (
    <SupervisorContext.Provider value={{ supervisorButtons, getUserTokenLocalStorage }}>
      {children}
    </SupervisorContext.Provider>
  );
}
