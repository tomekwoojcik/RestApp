import { List, ListItem } from "@mui/material"
import { useContext } from "react"
import { MessageContext } from "../../context/messageContext"
import { MessageObjectModel } from "../../context/messageObject";

const MessageRoom = () => {

    const {state} = useContext(MessageContext);
    return (
        <List sx={{ width: '100%', maxWidth: '400px' }}>
            {state.messageObj.messagesArr.map((obj: MessageObjectModel) => {
                <ListItem key={obj.messa}>

            </ListItem>    
            })}
            
        </List>
    )
}

export default MessageRoom