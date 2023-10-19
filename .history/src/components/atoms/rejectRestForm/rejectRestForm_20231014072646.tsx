import { Button, FormControl, Input, MenuItem, Select } from "@mui/material";
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
        <MenuItem
          onChange={() => handleOptionStatus(arrFormOptionStatus[0].frontText)}
          defaultValue={arrFormOptionStatus[0].value}
        >
          {arrFormOptionStatus[0].frontText}
        </MenuItem>
              <MenuItem
                  onChange={() =>
            handleOptionStatus(arrFormOptionStatus[0].frontText)
          }
                  defaultValue={arrFormOptionStatus[1].value}>
          {arrFormOptionStatus[1].frontText}
        </MenuItem>
      </Select>
      <Button variant="contained">Send Message</Button>
    </FormControl>
  );
};

export default RejectRestForm;
