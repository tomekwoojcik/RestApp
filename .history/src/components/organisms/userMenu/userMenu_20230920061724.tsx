import { Button } from "@mui/material";
import { FC, useContext } from "react";
import UserButtonsMenu from "../../molecules/userButtonsMenu/userButtonsMenu";
import UserContext from "../../context/userContext";
import UserMenuModule from "./UserMenu.module.scss";

const UserMenu: FC = () => {
  const { data, userButtons, supervisorButtons, userRoleArr } = useContext(
    UserContext,
  );

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

      { data.company.role.filter((role:string) => role == ) ? null : (
        <div>
          <p>Supervisor Menu</p>
          <UserButtonsMenu props={supervisorButtons} />
        </div>
      )}
      <Button>LogOff</Button>
    </div>
  );
};

export default UserMenu;