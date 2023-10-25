import { Button, FormControl, TextField } from "@mui/material";
import { FC, useContext } from "react";
import LeavePlanContext from "../../context/leavePlanContext";

const EmployeePendingRequestRestForm: FC = () => {
    const { handleActionForm, state } = useContext(LeavePlanContext);
    console.log(state);
  return (
    <FormControl>
      <TextField maxRows={5} multiline label="Request form" variant="filled" />
      <Button onClick={() => handleActionForm()} variant="contained">
        Send request
      </Button>
    </FormControl>
  );
};

export default EmployeePendingRequestRestForm;
