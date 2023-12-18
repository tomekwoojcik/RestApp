import { Outlet } from "react-router";
import { UserProvider } from "../../components/context/userContext";
import DrawerMenu from "../../components/organisms/drawerMenu";
import { FC } from "react";
import UserPageModule from "./UserPage.module.scss";

const UserPage: FC = () => {
  return (
    <UserProvider>
      <div className={UserPageModule.userPage}>
        <DrawerMenu />
        <Outlet  />
      </div>
    </UserProvider>
  );
};

export default UserPage;
