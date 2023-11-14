import { List, ListItem } from "@mui/material";
import { useContext } from "react";
import { MessageContext } from "../../context/messageContext";
import { MessageObjectModel } from "../../context/messageObject";

const MessageRoom = () => {
  const { state } = useContext(MessageContext);
  return (
    <List sx={{ width: "100%", maxWidth: "400px" }}>
      {!Object.keys(state.messageObj).length != false
        ? state.messageObj.messagesArr.map((obj: MessageObjectModel) => {
            <ListItem key={obj.messageId}>{obj.message}</ListItem>;
          })
        : <p>Choice a message</p>}
    </List>
  );
};

export default MessageRoom;
