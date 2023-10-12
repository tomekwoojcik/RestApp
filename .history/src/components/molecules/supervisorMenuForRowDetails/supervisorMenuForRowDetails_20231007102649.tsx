import { FC, useContext, useEffect, useReducer } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  initState,
  reducer,
  REDUCER_ACTION_TYPE,
} from "../../../hooks/supervisorHooks";
import { SupervisorContext } from "../../context/supervisorContext";
interface propsModel {
  leaveId: string;
}

const SupervisorMenuForRowDetails: FC<propsModel> = leaveId => {
  const [state, dispatch] = useReducer(reducer, initState);
  const open = Boolean(state.anchorEl);

  const { handleMenuAction } = useContext(SupervisorContext);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_ANCHOR_EL,
      payload: event.currentTarget,
    });
  };
  const handleClose = (buttonName: string) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.GET_SUPERVISOR_BUTTON_NAME,
      payload: buttonName,
    });
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_ANCHOR_EL,
      payload: null,
    });
    dispatch({
      type: REDUCER_ACTION_TYPE.GET_LEAVE_ID,
      payload: leaveId,
    });
  };

  useEffect(() => {
    handleMenuAction(state.supervisorButtonName, leaveId);
  }, [state.supervisorButtonName]);

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
        anchorEl={state.anchorEl}
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
