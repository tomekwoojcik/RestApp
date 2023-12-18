// import { Button } from "@mui/material";
// import { FC, useContext } from "react";
// import UserButtonsMenu from "../../molecules/userButtonsMenu/userButtonsMenu";
// import UserContext from "../../context/userContext";
// import UserMenuModule from "./UserMenu.module.scss";
// import { EmployeeRole } from "../../molecules/requireAuth/RequireAuth";

// const UserMenu: FC = () => {

//   return (
//     <div>
//       <div className={UserMenuModule.companyLogo} />
//       <h3>
//         {`Hello ${!data ? undefined : `${data.firstName} ${data.lastName}`}`}
//       </h3>
//       <div>
//         <p>User Menu</p>
//         <UserButtonsMenu props={userButtons} />
//       </div>

//       { roleToggle ?
//         (<div>
//           <p>Supervisor Menu</p>
//           <UserButtonsMenu props={supervisorButtons} />
//         </div>) :null
//       }
//       <Button>LogOff</Button>
//     </div>
//   );
// };

// export default UserMenu;

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { StyledTableCell } from "../../context/tableContext";
import UserContext from "../../context/userContext";
import { EmployeeRole } from "../../molecules/requireAuth/RequireAuth";

const drawerWidth = 240;

interface AppBarCustomProps {
  open?: boolean;
}

type StyledAppBarProps = AppBarProps & AppBarCustomProps;

const Main = styled("main", { shouldForwardProp: prop => prop !== "open" })<
  StyledAppBarProps
>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open",
})<StyledAppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { data, userButtons, supervisorButtons, userRoleArr } = useContext(
    UserContext,
  );

  const roleToggle: boolean[] = data.company.role
    .map((role: string) => {
      return role === EmployeeRole.Director || role === EmployeeRole.Supervisor;
    })
    .some((toggleEl: boolean) => toggleEl == true);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {userButtons.map(
            (key: number, buttonName: string, routes: string) => (
              <ListItem key={key} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {key % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={buttonName} />
                </ListItemButton>
              </ListItem>
            ),)}
        </List>
        <Divider />
        <List>
          {userButtons.map(
            (key: number, buttonName: string, routes: string) => (
              <ListItem key={key} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {key % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={buttonName} />
                </ListItemButton>
              </ListItem>
            ),
          )}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}

