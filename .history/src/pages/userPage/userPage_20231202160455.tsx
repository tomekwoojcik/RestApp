import { Outlet } from "react-router";
import { UserProvider } from "../../components/context/userContext";
import { FC } from "react";
import UserPageModule from "./UserPage.module.scss";
import DrawerMenu from "../../components/organisms/userMenu/drawerMenu";
import { Typography } from "@mui/material";

const UserPage: FC = () => {
  return (
    <UserProvider>
      <div className={UserPageModule.userPage}>
        <DrawerMenu />
<Typography>
        <Outlet />
              </Typography>
        
      </div>
    </UserProvider>
  );
};

export default UserPage;
