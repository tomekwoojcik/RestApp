import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";

export interface SupervisorModel {
  supervisorIdArr: number[];
}

export interface SupervisorMenuButtons {
    key: number,
    buttonName: string,
    routes:string
}

export const SupervisorContext = createContext({} as SupervisorModel);

export function SupervisorProvider({ children }: propsModel) {
    const supervisorIdArr: number[] = [1, 5, 6, 7, 4, 8, 43, 63, 22];
    
     const userButtons : SupervisorMenuButtons[] = [
    {
      key: 1,
      buttonName: "Plan your vacation.",
      routes: "plan",
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
