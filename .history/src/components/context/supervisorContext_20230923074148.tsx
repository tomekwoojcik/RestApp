import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";
import { MenuButtonModel } from "./userContext";
import { getUsersResource, UsersResourceModel } from "./UserResourceApi";
import Data from "./localhostContext";

export interface SupervisorModel {
  supervisorButtons: MenuButtonModel[];
  subordinatesArr: UsersResourceModel;
}

const userToken: string | any = localStorage.getItem("userToken");
const userData = new Data("")
const subordinatesArr: any = (await getUsersResource(userToken)).data.map(());
console.log(subordinatesArr);

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
  
  

  return (
    <SupervisorContext.Provider
      value={{}}
    >
      {children}
    </SupervisorContext.Provider>
  );
}
