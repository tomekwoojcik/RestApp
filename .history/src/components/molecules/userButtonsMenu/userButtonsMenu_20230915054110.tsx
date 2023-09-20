/* eslint-disable arrow-parens */
/* eslint-disable max-len */
import { FC, useContext } from "react";
import { Button } from "@mui/material";
import UserContext from "../../context/userContext";

interface UserButtonInterface {
  key: string;
  buttonName: string;
  routes: string[];
  navigate: any;
}

type UserContextType = {
  userButtons: UserButtonInterface[];
  navigate: (routes: string[]) => void;
};

interface propsModel {
  key: string;
  buttonName: string;
  routes: string[];
}

const UserButtonsMenu: FC<propsModel> = (props) => {
  const { userButtons, navigate } = useContext(UserContext) as UserContextType;
  return (
    <ul>
      {userButtons.map((el: UserButtonInterface) => (
        <li key={el.key}>
          <Button
            onClick={() => navigate(el.routes)}
            variant="contained"
            color="secondary"
            key={el.buttonName}
          >
            {el.buttonName}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default UserButtonsMenu;
