/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
/* eslint-disable arrow-parens */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Button, FormControl, MenuItem, TextField,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FC, useContext } from 'react';
import dayjs from 'dayjs';
import LeavePlanContext from '../../context/leavePlanContext';

const LeaveForm: FC = () => {
  const {
    setFirstDate, setLastDate, leaveArr, setLeave, setPersonReplace, personReplaceArr, leavePlanHandle, leave, personReplace,
  } = useContext(LeavePlanContext);

  return (
    <FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <label className="urlopApp__leaveFormLabel">
          Plan your rest.
          <DatePicker
            // inputFormat="DD/MM/YYYY"
            defaultValue={dayjs(new Date())}
            onChange={e => setFirstDate(e)}
            label="The first day of leave"
          />
          <DatePicker
            // inputFormat="DD/MM/YYYY"
            defaultValue={dayjs(new Date())}
            onChange={e => setLastDate(e)}
            label="The last day of leave"
          />
          <TextField onChange={e => setLeave(e.target.value)} className="urlopApp__leaveForm" variant="outlined" select value={leave} defaultValue={leaveArr[0]} label="A kind of rest.">
            {leaveArr.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>)}
          </TextField>
          <TextField onChange={e => setPersonReplace(e.target.value)} className="urlopApp__leaveFormTextField urlopApp__leaveForm" variant="outlined" select value={personReplace} defaultValue={personReplaceArr[0]} label="Choose a person to replace you.">
            {personReplaceArr.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>)}
          </TextField>
          <Button onClick={() => leavePlanHandle()} variant="contained">Send request.</Button>
        </label>
      </LocalizationProvider>
    </FormControl>
  );
}

export default LeaveForm;
