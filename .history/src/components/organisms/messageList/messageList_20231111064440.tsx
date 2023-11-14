import { Fragment, useContext } from "react";
import { MessageContext } from "../../context/messageContext";
import { List, ListItem, ListItemText } from "@mui/material";
import { Messages } from "../../context/messageObj";
import { UserModel } from "../../../interface/responseModel";
import Typography from "@mui/material/Typography";

const MessageList = () => {
  const { state } = useContext(MessageContext);

  const subordinatesFilter = (messageRecipient: any) => {
    const [objFilter] = state.subordinatesArr.filter(
      (userObj: UserModel) => userObj.id == messageRecipient,
    );
    return objFilter;
  };
  return (
    <div>
      <List sx={{ mb: 2 }}>
        {state.messageObjArr.map((obj: Messages) => (
          <ListItem key={obj.messageId}>
            <ListItemText
              primary={obj.messagesArr[obj.messagesArr.length - 1].message}
              secondary={
                <Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {
                    `Message from: ${subordinatesFilter(obj.messageRecipient).firstName}
                    ${subordinatesFilter(obj.messageRecipient).lastName} `
                    }
                  </Typography>
                </Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MessageList;
