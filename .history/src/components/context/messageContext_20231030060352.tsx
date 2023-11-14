import { createContext } from "react";

interface MessageModel {
    
}

const MessageContext = createContext({} as MessageModel)


const MessageProvider = ({children}: PropsModel) => {
    

    return (
        <MessageContext.Provider value={{}}>
            {children}
        </MessageContext.Provider>
    )
}