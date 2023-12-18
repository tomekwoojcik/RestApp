import { FormControl, TextField } from "@mui/material";
import { FC } from "react";
interface KindOfMessageModel {
  kindOfMessage: string;
  labelKindOfMessage: string;
}
const MessageForm: FC = () => {
  const arrKindOfMessage: KindOfMessageModel[] = [
    {
      kindOfMessage: "Application error",
      labelKindOfMessage: "error",
    },
  ];
  return (
    <FormControl>
      <TextField select label="Choice a reason"></TextField>
      <TextField label="Message text" variant="filled" maxRows={5} />
    </FormControl>
  );
};

export default MessageForm;