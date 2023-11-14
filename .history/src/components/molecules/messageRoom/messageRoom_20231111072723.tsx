import { List, ListItem } from "@mui/material"
import { useContext } from "react"
import { MessageContext } from "../../context/messageContext"

const MessageRoom = () => {

    const {state} = useContext(MessageContext);
    return (
        <List sx={{ width: '100%', maxWidth: '400px' }}>
            {state.messageObj.messagesArr.map((obj:)=>{})}
            <ListItem>

            </ListItem>
        </List>
    )
}

export default MessageRoom