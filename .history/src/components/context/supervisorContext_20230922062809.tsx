import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";
import { MenuButtonModel } from "./userContext";
import Data from "./localhostContext";
import { getUsersResource, UserRe } from "./UserResourceApi";
export interface SupervisorModel {
  supervisorButtons: MenuButtonModel[];
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
  const data: Data = new Data("token");
  const dataValue: string = data.getData();
  const responseApi = getUsersResource(dataValue);
  console.log(responseApi);
  const x: string = "cccc";

  return (
    <SupervisorContext.Provider value={{ supervisorButtons }}>
      {children}
    </SupervisorContext.Provider>
  );
}
