// import { Button, Menu, MenuItem } from '@mui/material';
// import { FC } from 'react'

// interface propsModel {
//     leaveId: string;
//     employeeId: string | number;
// }

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