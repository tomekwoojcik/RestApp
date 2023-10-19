import { Button, FormControl, Input, Select } from "@mui/material";
import { FC } from "react";

const RejectRestForm: FC = () => {
  return (
    <FormControl>
      <Input
        type="text"
        placeholder="Comment..."
        aria-label="Supervisor comment"
          />
          <Select>
              <Option></Option>
          </Select>
      <Button variant="contained">Send Message</Button>
    </FormControl>
  );
};

export default RejectRestForm;
