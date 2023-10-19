import { Button, FormControl, Input, MenuItem, Select } from "@mui/material";
import { FC, useContext } from "react";
import { SupervisorContext } from "../../context/supervisorContext";

const RejectRestForm: FC = () => {
  const { arrFormOptionStatus } = useContext(SupervisorContext);
  return (
    <FormControl>
      <Input onChange={()=>{}}
        type="text"
        placeholder="Comment..."
        aria-label="Supervisor comment"
      />
      <Select>
        <MenuItem defaultValue={arrFormOptionStatus[0].value}>
          {arrFormOptionStatus[0].frontText}
        </MenuItem>
        <MenuItem defaultValue={arrFormOptionStatus[1].value}>
          {arrFormOptionStatus[1].frontText}
        </MenuItem>
      </Select>
      <Button variant="contained">Send Message</Button>
    </FormControl>
  );
};

export default RejectRestForm;
