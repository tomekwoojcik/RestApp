import { Button, MenuItem, Menu, Fade } from "@mui/material";
import { FC, useContext, useState } from "react";
import LeavePlanContext from "../../context/leavePlanContext";

const MenuListLeavePlan: FC<{ leaveId: string }> = leaveId => {
  const [menuBooleanList, setMenuBooleanList] = useState(null);
  const { menuListArr, handleActionLeave } = useContext(LeavePlanContext);
  const open = Boolean(menuBooleanList);
  const handleOpen = (e: any) => setMenuBooleanList(e.currentTarget);
  const handleClose = (e: any) => {
    setMenuBooleanList(null);
    handleActionLeave(e);
  };
  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? true : undefined}
        onClick={e => handleOpen(e)}
        variant="contained"
        color="primary"
      >
        Action
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={menuBooleanList}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {menuListArr.map(name => (
          <MenuItem
            key={Math.random()}
            onClick={event => handleClose({ event, name, leaveId })}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuListLeavePlan;
