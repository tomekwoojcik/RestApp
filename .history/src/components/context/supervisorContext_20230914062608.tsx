import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";

export interface SupervisorModel{
    x: string,
}


export const SupervisorContext = createContext({} as SupervisorModel);


export function SupervisorProvider({children}:propsModel) {
    const x:string ="cccc"


    return (
        <SupervisorContext.Provider value={{x}}>{children} </SupervisorContext.Provider>
    )
}