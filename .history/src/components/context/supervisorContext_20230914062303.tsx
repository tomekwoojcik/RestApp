import { createContext } from "react";

export interface SupervisorModel{

}


export const SupervisorContext = createContext({} as SupervisorModel);


export function SupervisorProvider({children}) {
    


    return (
        <SupervisorContext.Provider value={{

        }}>{children} <SupervisorContext/>
    )
}