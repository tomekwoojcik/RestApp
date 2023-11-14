import { Fragment, useContext } from "react"
import { MessageContext } from "../../context/messageContext"
import { List } from "@mui/material";
import { Messages } from "../../context/messageObj";

const MessageList = () => {
    const {state} = useContext(MessageContext);
    return (
        <div>
            <List sx={{ mb: 2 }}>
                {state.messageObjArr.map((obj: Messages) => {
                    console.log(obj);
                })}
            </List>
            
        </div>
    )
}

export default MessageList