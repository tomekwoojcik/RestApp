import { FormControl, MenuItem, TextField } from "@mui/material";
import { FC, useReducer } from "react";
import { initState, reducer } from "../../../hooks/messageHooks";
import { UserModel } from "../../../interface/responseModel";
interface KindOfMessageModel {
  kindOfMessage: string;
  labelKindOfMessage: string;
}
const MessageForm: FC = () => {

  const [state, dispatch] = useReducer(reducer, initState);
  const arrKindOfMessage: KindOfMessageModel[] = [
    {
      kindOfMessage: "Choice a reason",
      labelKindOfMessage: "Choice a reason",
    },
    {
      kindOfMessage: "Application error",
      labelKindOfMessage: "Error",
    },
  ];
  return (
    <FormControl>
          <div>
              <h1>{"New message"}</h1>
        <TextField select label="Choice a person" defaultValue="null">
          {state.subordinatesArr.map((obj: UserModel) => (
            <MenuItem
              value={`${obj.firstName} ${obj.lastName}`}
              key={`${obj.firstName} ${obj.lastName}`}
            >
              {`${obj.firstName} ${obj.lastName}`}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Choice a reason"
          defaultValue={arrKindOfMessage[0].labelKindOfMessage}
        >
          {arrKindOfMessage.map((obj: KindOfMessageModel) => (
            <MenuItem
              value={obj.labelKindOfMessage}
              key={obj.labelKindOfMessage}
            >
              {obj.labelKindOfMessage}
            </MenuItem>
          ))}
        </TextField>
        <TextField label="Message text" variant="filled" maxRows={5} />
      </div>
    </FormControl>
  );
};

export default MessageForm;
