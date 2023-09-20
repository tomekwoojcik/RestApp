import { Outlet } from "react-router";
import { UserProvider } from "../../components/context/userContext";
import UserMenu from "../../components/organisms/userMenu/userMenu";
import { FC } from "react";
import UserPageModule from "./UserPage.module.scss";
import { SupervisorProvider } from "../../components/context/supervisorContext";

const UserPage: FC = () => {
  return (
      <UserProvider>
        <div className={UserPageModule.userPage}>
          <UserMenu />
          <Outlet />
        </div>
      </UserProvider>
  );
};

export default UserPage;
