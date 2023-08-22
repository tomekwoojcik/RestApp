import { Button, FormControl, MenuItem, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ChangeEvent, FC, useContext } from "react";
import dayjs, { Dayjs } from "dayjs";
import LeavePlanContext from "../../context/leavePlanContext";
import { REDUCER_ACTION_TYPE } from "../../../hooks/leavePlanHooks";

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
    <FormControl>
    </FormControl>
  );
};

export default LeaveForm;
