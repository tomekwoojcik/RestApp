import { Button, FormControl, MenuItem, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ChangeEvent, FC, useContext } from "react";
import dayjs from "dayjs";
import LeavePlanContext from "../../context/leavePlanContext";
import { REDUCER_ACTION_TYPE } from "../../../hooks/leavePlanHooks";

const LeaveForm: FC = () => {
  const {
    handleDay,
    leaveArr,
    setLeave,
    setPersonReplace,
    personReplaceArr,
    leavePlanHandle,
    leave,
    personReplace,
  } = useContext(LeavePlanContext);
console.log(typeof <DatePicker/>) 
  return (
    <FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <label className="urlopApp__leaveFormLabel">
          Plan your rest.
          <DatePicker
            defaultValue={dayjs(new Date())} 
            onChange={(e:ChangeEvent<Date>) => handleDay(REDUCER_ACTION_TYPE.SET_FIRST_DAY, e)}
            label="The first day of leave"
          />
          <DatePicker
            defaultValue={dayjs(new Date())}
            onChange={e => setLastDate(e)}
            label="The last day of leave"
          />
          <TextField
            onChange={e => setLeave(e.target.value)}
            className="urlopApp__leaveForm"
            variant="outlined"
            select
            value={leave}
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
            onChange={e => setPersonReplace(e.target.value)}
            className="urlopApp__leaveFormTextField urlopApp__leaveForm"
            variant="outlined"
            select
            value={personReplace}
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
