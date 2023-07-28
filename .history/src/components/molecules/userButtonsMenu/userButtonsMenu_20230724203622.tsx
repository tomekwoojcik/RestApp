import { useContext } from 'react';
import { Button } from '@mui/material';
import UserContext from '../../context/userContext';

interface UserButtonInterface {
  key: string;
  buttonName: string;
  routes: string[];
}

function UserButtonsMenu() {
  const { userButtons, navigate } = useContext(UserContext);
  return (
    <ul>
      {userButtons.map((el) => (
        <li key={el.key}>
          <Button onClick={() => navigate(el.routes)} variant="contained" color="secondary">
            {el.buttonName}
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default UserButtonsMenu;
