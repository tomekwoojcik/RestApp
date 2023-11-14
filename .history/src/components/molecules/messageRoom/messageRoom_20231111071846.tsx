import { List } from "@mui/material"
import { useContext } from "react"
import { MessageContext } from "../../context/messageContext"

const MessageRoom = () => {

    const {state} = useContext(MessageContext);
    return (
        <List sx={{ width: '100%', maxWidth: '400px' }}>
            
        </List>
    )
}

export default MessageRoom