import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import UserContext from "../../context/userContext";
import { EmployeeRole } from "../../molecules/requireAuth/RequireAuth";
import { useContext } from "react";
import DrawerList from "../../molecules/drawerList/drawerList";
import {drawerWidth, AppBar, DrawerHeader, Main} from "./drawerMenuContextStyle";

const DrawerMenu = () => {

  const {
    data,
    userButtons,
    supervisorButtons,
    handleDrawerOpen,
    handleDrawerClose,
    open,
  } = useContext(UserContext);

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
          <Typography variant="h6" noWrap component="div">
            {`Hello ${
              !data ? undefined : `${data.firstName} ${data.lastName}`
            }`}
          </Typography>
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
        <DrawerList arr={userButtons} />
        <Divider />
        {roleToggle ? <DrawerList arr={supervisorButtons} /> : null}
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
};

export default DrawerMenu;