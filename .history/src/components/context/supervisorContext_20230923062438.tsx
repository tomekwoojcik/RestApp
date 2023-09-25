import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";
import { MenuButtonModel } from "./userContext";
import { getUsersResource, UsersResourceModel } from "./UserResourceApi";
export interface SupervisorModel {
  supervisorButtons: MenuButtonModel[];
  getUserTokenLocalStorage: string | null;
  foo: any;
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
  const getUserTokenLocalStorage: string | null = localStorage.getItem(
    "userToken",
  );

  const foo = getUsersResource(getUserTokenLocalStorage)
  
  console.log(foo);
  const x: string = "cccc";

  return (
    <SupervisorContext.Provider
      value={{ supervisorButtons, getUserTokenLocalStorage, foo }}
    >
      {children}
    </SupervisorContext.Provider>
  );
}
