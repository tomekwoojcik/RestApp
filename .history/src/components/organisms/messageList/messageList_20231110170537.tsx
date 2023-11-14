import { Fragment, useContext } from "react";
import { MessageContext } from "../../context/messageContext";
import { List, ListItem, ListItemText } from "@mui/material";
import { Messages } from "../../context/messageObj";

const MessageList = () => {
  const { state } = useContext(MessageContext);
  return (
    <div>
      <List sx={{ mb: 2 }}>
        {state.messageObjArr.map((obj: Messages) => (
          <ListItem key={obj.messageId}>
            <ListItemText></ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MessageList;
