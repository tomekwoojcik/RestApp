import { FormControl, MenuItem, TextField } from "@mui/material";
import { FC } from "react";
interface KindOfMessageModel {
  kindOfMessage: string;
  labelKindOfMessage: string;
}
const MessageForm: FC = () => {
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
          {arrKindOfMessage.map((obj: KindOfMessageModel) => (
            <MenuItem
              value={obj.labelKindOfMessage}
              key={obj.labelKindOfMessage}
            >
              {obj.labelKindOfMessage}
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
