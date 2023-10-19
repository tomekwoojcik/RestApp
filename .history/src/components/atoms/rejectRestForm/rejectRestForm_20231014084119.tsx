import { Button, FormControl, Input, ListItem, MenuItem, Select, TextField } from "@mui/material";
import { ChangeEvent, FC, FormEvent, useContext } from "react";
import { ArrFormOptionStatusModel, SupervisorContext } from "../../context/supervisorContext";

const RejectRestForm: FC = () => {
    const {
      state,
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
          

          <TextField
            onChange={(e:ChangeEvent<HTMLInputElement>) => handleOptionStatus(e.target.value)}
            className="urlopApp__leaveFormTextField urlopApp__leaveForm"
            variant="outlined"
            select
            value={state.handleOptionStatus}
            defaultValue={arrFormOptionStatus[0].value}
            label="Choose a status."
          >
            {arrFormOptionStatus.map((obj:ArrFormOptionStatusModel) => (
              <MenuItem key={obj.value} value={obj.value}>
                {obj.frontText}
              </MenuItem>
            ))}
          </TextField>
      <Button variant="contained">Send Message</Button>
    </FormControl>
  );
};

export default RejectRestForm;
