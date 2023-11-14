import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";

interface MessageModel {
    
}

const MessageContext = createContext({} as MessageModel)


const MessageProvider = ({children}: propsModel) => {
    

    return (
        <MessageContext.Provider value={{}}>
            {children}
        </MessageContext.Provider>
    )
}