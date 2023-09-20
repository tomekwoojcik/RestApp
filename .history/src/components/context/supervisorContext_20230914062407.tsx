import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";

export interface SupervisorModel{

}


export const SupervisorContext = createContext({} as SupervisorModel);


export function SupervisorProvider({children}:propsModel) {
    


    return (
        <SupervisorContext.Provider value={{}}>{children} <SupervisorContext.Provider/>
    )
}