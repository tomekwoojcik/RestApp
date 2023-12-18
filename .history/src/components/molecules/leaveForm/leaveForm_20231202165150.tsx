import { Button, FormControl, MenuItem, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ChangeEvent, FC, useContext } from "react";
import dayjs, { Dayjs } from "dayjs";
import LeavePlanContext from "../../context/leavePlanContext";
import { REDUCER_ACTION_TYPE } from "../../../hooks/leavePlanHooks";
import LeaveFormModule from "./leaveForm.module.scss";

const LeaveForm: FC = () => {
  const {
    handleDay,
    handleValue,
    state,
    leaveArr,
    personReplaceArr,
    leavePlanHandle,
  } = useContext(LeavePlanContext);
  return (
    <FormControl className={LeaveFormModule.formDiv}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <label className={LeaveFormModule.label}>
          Plan your rest.
          <DatePicker
            defaultValue={dayjs(new Date())} 
            onChange={(e:Dayjs| null) => handleDay(REDUCER_ACTION_TYPE.FIRST_DAY, e)}
            label="The first day of leave"
          />
          <DatePicker
            defaultValue={dayjs(new Date())}
            onChange={(e:Dayjs| null) => handleDay(REDUCER_ACTION_TYPE.LAST_DAY, e)}
            label="The last day of leave"
          />
          <TextField
            onChange={(e:ChangeEvent<HTMLInputElement>) => handleValue(e, REDUCER_ACTION_TYPE.KIND_LEAVE)}
            className="urlopApp__leaveForm"
            variant="outlined"
            select
            value={state.kindLeave}
            defaultValue={leaveArr[0]}
            label="A kind of rest."
          >
            {leaveArr.map(el => (
              <MenuItem key={el} value={el}>
                {el}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            onChange={(e:ChangeEvent<HTMLInputElement>) => handleValue(e, REDUCER_ACTION_TYPE.REPLACE_PERSON)}
            className="urlopApp__leaveFormTextField urlopApp__leaveForm"
            variant="outlined"
            select
            value={state.replacePerson}
            defaultValue={personReplaceArr[0]}
            label="Choose a person to replace you."
          >
            {personReplaceArr.map(el => (
              <MenuItem key={el} value={el}>
                {el}
              </MenuItem>
            ))}
          </TextField>
          <Button onClick={() => leavePlanHandle()} variant="contained">
            Send request.
          </Button>
        </label>
      </LocalizationProvider>
    </FormControl>
  );
};

export default LeaveForm;
