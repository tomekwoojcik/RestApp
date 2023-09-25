import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";
import { MenuButtonModel } from "./userContext";
import { getUsersResource, UsersResourceModel } from "./UserResourceApi";

export interface SupervisorModel {
  supervisorButtons: MenuButtonModel[];
  foo: any;
}

const userToken: string | any = localStorage.getItem("userToken");


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

export async function SupervisorProvider({ children }: propsModel) {
  const x: string = "cccc";
  
  const foo = (userToken: string | any) => {
    return getUsersResource(userToken);
  }

  return (
    <SupervisorContext.Provider
      value={{foo}}
    >
      {children}
    </SupervisorContext.Provider>
  );
}
