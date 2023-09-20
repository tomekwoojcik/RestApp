import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";
import { MenuButtonModel } from "./userContext";
export interface SupervisorModel {
  supervisorIdArr: number[];
}

export const SupervisorContext = createContext({} as SupervisorModel);

export function SupervisorProvider({ children }: propsModel) {
    const supervisorIdArr: number[] = [1, 5, 6, 7, 4, 8, 43, 63, 22];
    
     const userButtons : MenuButtonModel[] = [
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
    
  const x: string = "cccc";

  return (
    <SupervisorContext.Provider value={{ supervisorIdArr }}>
      {children}
    </SupervisorContext.Provider>
  );
}
