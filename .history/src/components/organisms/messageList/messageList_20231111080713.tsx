import { Fragment, useContext } from "react";
import { MessageContext } from "../../context/messageContext";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import { Messages } from "../../context/messageObj";
import { UserModel } from "../../../interface/responseModel";
import Typography from "@mui/material/Typography";
import MessageRoom from "../../molecules/messageRoom/messageRoom";

const MessageList = () => {
  const { state, setMessageInRoom } = useContext(MessageContext);

  const subordinatesFilter = (messageRecipient: any) => {
    const [objFilter] = state.subordinatesArr.filter(
      (userObj: UserModel) => userObj.id == messageRecipient,
    );
    return objFilter;
  };
  return (
    <div style={{display:"flex", flexDirection:"row"}}>
      <List style={{display:"flex", flexDirection:"column"}} sx={{ mb: 2 }}>
        {state.messageObjArr.map((obj: Messages) => (
          <Button onClick={()=>setMessageInRoom(obj)}>
            <ListItem key={obj.messageId}>
              <ListItemText
                primary={`Message content: ${
                  obj.messagesArr[obj.messagesArr.length - 1].message
                }`}
                secondary={
                  <Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {`Message from: 
                    ${subordinatesFilter(obj.messageRecipient).firstName}
                    ${subordinatesFilter(obj.messageRecipient).lastName} `}
                    </Typography>
                  </Fragment>
                }
              />
            </ListItem>
          </Button>
        ))}
          </List>
          <MessageRoom/>
    </div>
  );
};

export default MessageList;
