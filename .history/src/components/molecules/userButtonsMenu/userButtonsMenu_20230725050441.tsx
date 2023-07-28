/* eslint-disable arrow-parens */
/* eslint-disable max-len */
import { useContext } from 'react';
import { Button } from '@mui/material';
import UserContext from '../../context/userContext';

interface UserButtonInterface {
  key: string; 
  buttonName: string;
  routes: string[];
  navigate: any;
}



function UserButtonsMenu() {
  const { userButtons, navigate } = useContext(UserContext) as { userButtons: UserButtonInterface[] };
  return (
    <ul>
      {userButtons.map((el:UserButtonInterface) => <li key={el.key}><Button onClick={() => navigate(el.routes)} variant="contained" color="secondary" key={el.buttonName}>{el.buttonName}</Button></li>)}
    </ul>
  );
}

export default UserButtonsMenu; 
