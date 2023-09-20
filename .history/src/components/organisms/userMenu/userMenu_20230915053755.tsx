import { Button } from "@mui/material";
import { FC, useContext } from "react";
import UserButtonsMenu from "../../molecules/userButtonsMenu/userButtonsMenu";
import UserContext from "../../context/userContext";
import UserMenuModule from "./UserMenu.module.scss";

const UserMenu: FC = () => {
  const { data } = useContext(UserContext);
  return (
    <div>
      <div className={UserMenuModule.companyLogo} />
      <h3>
        {`Hello ${!data ? undefined : `${data.firstName} ${data.lastName}`}`}
      </h3>
      <div>
        <p>User Menu</p>
        <UserButtonsMenu />
      </div>
      <Button>LogOff</Button>
    </div>
  );
};

export default UserMenu;
