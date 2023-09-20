import { Button } from "@mui/material";
import { FC, useContext } from "react";
import UserButtonsMenu from "../../molecules/userButtonsMenu/userButtonsMenu";
import UserContext from "../../context/userContext";
import UserMenuModule from "./UserMenu.module.scss";
import { SupervisorContext } from "../../context/supervisorContext";

const UserMenu: FC = () => {
  const { data, userButtons, supervisorIdArr, supervisorButtons } = useContext(UserContext);
  return (
    <div>
      <div className={UserMenuModule.companyLogo} />
      <h3>
        {`Hello ${!data ? undefined : `${data.firstName} ${data.lastName}`}`}
      </h3>
      <div>
        <p>User Menu</p>
        <UserButtonsMenu props={userButtons} />
      </div>
       <div>
        <p>Supervisor Menu</p>
        <UserButtonsMenu />
      </div>
      <Button>LogOff</Button>
    </div>
  );
};

export default UserMenu;
