import { createContext } from "react";

export interface SupervisorModel{

}


export const SupervisorContext = createContext({} as SupervisorModel);


export function SupervisorProvider() {
    


    return (
        <SupervisorContext.Provider value={{

        }}> <SupervisorContext/>
    )
}