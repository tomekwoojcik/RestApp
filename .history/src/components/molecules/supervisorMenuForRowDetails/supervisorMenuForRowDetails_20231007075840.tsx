import { FC, useReducer } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import {
  initState,
  reducer,
  REDUCER_ACTION_TYPE,
} from "../../../hooks/supervisorHooks";
interface propsModel {
  leaveId: string;
  employeeId: string | number;
}

const SupervisorMenuForRowDetails: FC<propsModel> = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [state, dispatch] = useReducer(reducer, initState);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (buttonName: string) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.GET_SUPERVISOR_BUTTON_NAME,
      payload: buttonName,
    });
      dispatch({
          type: REDUCER_ACTION_TYPE.SET_ANCHOR_EL,
          payload:null
      })

  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Action
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleClose("confirm")}>Confirm</MenuItem>
        <MenuItem onClick={() => handleClose("reject")}>Reject</MenuItem>
      </Menu>
    </div>
  );
};
export default SupervisorMenuForRowDetails;
