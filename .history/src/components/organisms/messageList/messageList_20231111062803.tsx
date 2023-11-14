import { Fragment, useContext } from "react";
import { MessageContext } from "../../context/messageContext";
import { List, ListItem, ListItemText } from "@mui/material";
import { Messages } from "../../context/messageObj";
import { UserModel } from "../../../interface/responseModel";

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
                            <Topography/>
                        </Fragment>
                    }
                >
              {`
                ${subordinatesFilter(obj.messageRecipient).firstName}
                ${subordinatesFilter(obj.messageRecipient).lastName}
               `}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MessageList;
