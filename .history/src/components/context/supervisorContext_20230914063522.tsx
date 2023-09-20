import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";

export interface SupervisorModel{
    supervisorIdArr: number[],
}


export const SupervisorContext = createContext({} as SupervisorModel);


export function SupervisorProvider({ children }: propsModel) {
    
    const supervisorIdArr: number[] = [1, 5, 6, 7, 4, 8, 43, 63, 22];
    const x:string ="cccc"


    return (
        <SupervisorContext.Provider value={{supervisorIdArr}}>{children} </SupervisorContext.Provider>
    )
}