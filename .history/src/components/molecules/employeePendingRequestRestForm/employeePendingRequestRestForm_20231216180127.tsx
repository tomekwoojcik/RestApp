import { Button, FormControl, TextField } from "@mui/material";
import { ChangeEvent, FC, useContext } from "react";
import LeavePlanContext from "../../context/leavePlanContext";

const EmployeePendingRequestRestForm: FC = () => {
  const { handleActionForm, state, handleFormTextRequestEmployee } = useContext(
    LeavePlanContext,
  );
  return (
    <FormControl>
      <TextField
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleFormTextRequestEmployee(e)
        }
        maxRows={10}
        multiline
        label="Request form"
        variant="filled"
        className="employeePendingRequestRestForm"
      />
      <Button
        onClick={() => handleActionForm(state.leaveRequestsCancelObj)}
        variant="contained"
      >
        Send request
      </Button>
    </FormControl>
  );
};

export default EmployeePendingRequestRestForm;
