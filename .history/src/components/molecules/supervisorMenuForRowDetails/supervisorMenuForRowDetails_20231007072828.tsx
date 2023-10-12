// import { Button, Menu, MenuItem } from '@mui/material';
// import { FC } from 'react'


// const SupervisorMenuForRowDetails:FC<propsModel> = () => {
//     return (
//          <div>
//       <Button
//         id="basic-button"
//         aria-controls={open ? 'basic-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//       >
//         Dashboard
//       </Button>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'basic-button',
//         }}
//       >
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </div>
//     )
// }

// export default SupervisorMenuForRowDetails

import {FC } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";


interface propsModel {
    leaveId: string;
    employeeId: string | number;
}

const SupervisorMenuForRowDetails: FC<propsModel> = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>, buttonName: string) => {
      console.log(buttonName);
    setAnchorEl(null);
  };

  console.log(anchorEl);

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
        <MenuItem onClick={e => handleClose(e, "confirm")}>Confirm</MenuItem>
        <MenuItem onClick={e => handleClose(e, "reject")}>Reject</MenuItem>
      </Menu>
    </div>
  );
};
export default SupervisorMenuForRowDetails;
