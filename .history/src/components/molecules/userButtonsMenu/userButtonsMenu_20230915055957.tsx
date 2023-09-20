/* eslint-disable arrow-parens */
/* eslint-disable max-len */
import { FC, useContext } from "react";
import { Button } from "@mui/material";
import UserContext from "../../context/userContext";
import { MenuButtonModel } from "../../context/userContext";
interface UserButtonInterface {
  key: string;
  buttonName: string;
  routes: string[];
  navigate: any;
}

type UserContextType = {
  navigate: (routes: string) => void;
};

interface propsModel {
  props: MenuButtonModel[]
}

const UserButtonsMenu: FC<propsModel> = (props) => {
  const { navigate } = useContext(UserContext) as UserContextType;
  return (
    <ul>
      {props.props.map((el: MenuButtonModel) => (
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
