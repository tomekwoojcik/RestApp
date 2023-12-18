import { useContext } from "react"
import { MessageContext } from "../../context/messageContext"
import { List } from "@mui/material";

const MessageList = () => {
    const {state} = useContext(MessageContext);
    return (
        <div>
            <List sx={{ mb: 2 }}>
                {state.messageObjArr.map((obj:)=>{})}
            </List>
            
        </div>
    )
}

export default MessageList