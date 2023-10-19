import { Button, FormControl, Input, MenuItem, Select } from "@mui/material";
import { FC, useContext } from "react";
import { SupervisorContext } from "../../context/supervisorContext";

const RejectRestForm: FC = () => {
    const { arrFormOptionStatus } = useContext(SupervisorContext);
    console.log(arrFormOptionStatus);
  return (
    <FormControl>
      <Input
        type="text"
        placeholder="Comment..."
        aria-label="Supervisor comment"
          />
          <Select>
              <MenuItem defaultValue={arrFormOptionStatus.value}>{ }</MenuItem>
          </Select>
      <Button variant="contained">Send Message</Button>
    </FormControl>
  );
};

export default RejectRestForm;
