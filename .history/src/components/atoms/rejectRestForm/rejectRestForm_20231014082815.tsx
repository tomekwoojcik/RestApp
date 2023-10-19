import { Button, FormControl, Input, ListItem, MenuItem, Select } from "@mui/material";
import { ChangeEvent, FC, FormEvent, useContext } from "react";
import { SupervisorContext } from "../../context/supervisorContext";

const RejectRestForm: FC = () => {
  const {
    arrFormOptionStatus,
    handleSupervisorComment,
    handleOptionStatus,
  } = useContext(SupervisorContext);
  return (
    <FormControl>
      <Input
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleSupervisorComment(e.target.value)
        }
        type="text"
        placeholder="Comment..."
        aria-label="Supervisor comment"
          />
          

          

      <Select>
        <ListItem
          onClick={(e: FormEvent<HTMLAnchorElement>) =>
            handleOptionStatus(e.target.value)
          }
          defaultValue={arrFormOptionStatus[0].value}
        >
          {arrFormOptionStatus[0].frontText}
        </ListItem>
        <ListItem defaultValue={arrFormOptionStatus[1].value}>
          {arrFormOptionStatus[1].frontText}
        </ListItem>
      </Select>
      <Button variant="contained">Send Message</Button>
    </FormControl>
  );
};

export default RejectRestForm;
