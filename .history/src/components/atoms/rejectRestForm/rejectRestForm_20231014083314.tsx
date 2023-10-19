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
            onChange={(e:ChangeEvent<HTMLInputElement>) => handleOptionStatus(e)}
            className="urlopApp__leaveFormTextField urlopApp__leaveForm"
            variant="outlined"
            select
            value={state}
            defaultValue={arrFormOptionStatus[0]}
            label="Choose a person to replace you."
          >
            {arrFormOptionStatus.map((obj:ArrFormOptionStatusModel) => (
              <MenuItem key={obj.value} value={obj.value}>
                {obj.frontText}
              </MenuItem>
            ))}
          </TextField>

      {/* <Select>
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
      </Select> */}
      <Button variant="contained">Send Message</Button>
    </FormControl>
  );
};

export default RejectRestForm;