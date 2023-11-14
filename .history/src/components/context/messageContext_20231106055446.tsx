import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";

interface MessageModel {
    
}

export const MessageContext = createContext({} as MessageModel)


export const MessageProvider = ({children}: propsModel) => {
    
    

    return (
        <MessageContext.Provider value={{}}>
            {children}
        </MessageContext.Provider>
    )
}