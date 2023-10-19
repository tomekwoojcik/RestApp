import { Button, FormControl, Input, Select } from "@mui/material";
import { FC, useContext } from "react";
import { SupervisorContext } from "../../context/supervisorContext";

const RejectRestForm: FC = () => {
    const { arrFormOptionStatus } = useContext(SupervisorContext);
  return (
    <FormControl>
      <Input
        type="text"
        placeholder="Comment..."
        aria-label="Supervisor comment"
          />
          <Select>
              {arrFormOptionStatus.map((el: string) => { <Option value={el} key={el}>{el}</Option>})}
          </Select>
      <Button variant="contained">Send Message</Button>
    </FormControl>
  );
};

export default RejectRestForm;
