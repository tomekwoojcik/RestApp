import { Outlet } from "react-router";
import { UserProvider } from "../../components/context/userContext";
import { FC } from "react";
import UserPageModule from "./UserPage.module.scss";
import DrawerMenu from "../../components/organisms/userMenu/drawerMenu";

const UserPage: FC = () => {
  return (
    <UserProvider>
      <Topo
      <div className={UserPageModule.userPage}>
        <DrawerMenu />
        <Outlet  />
      </div>
    </UserProvider>
  );
};

export default UserPage;
