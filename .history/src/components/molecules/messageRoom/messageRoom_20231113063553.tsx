import { List, ListItem, ListItemText } from "@mui/material";
import { useContext } from "react";
import { MessageContext } from "../../context/messageContext";
import { MessageObjectModel } from "../../context/messageObject";

const MessageRoom = () => {
  const { state } = useContext(MessageContext);
  return (
    <ul style={{width:"100px", height:"100px", backgroundColor:"red"}}>
      {!Object.keys(state.messageObj).length != true ? (
        state.messageObj.messagesArr.map((obj: MessageObjectModel) => {
          <li key={obj.messageId}>{obj.message}</li>;
        })
      ) : (
        <p>Choice a message</p>
      )}
    </ul>
  );
};

export default MessageRoom;
