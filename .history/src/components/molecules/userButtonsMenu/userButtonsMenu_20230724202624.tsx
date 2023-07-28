/* eslint-disable arrow-parens */
/* eslint-disable max-len */
import { useContext } from 'react';
import { Button } from '@mui/material';
import UserContext from '../../context/userContext';

function UserButtonsMenu() {
  const { userButtons, navigate } = useContext(UserContext);
  return (
    <ul>
      {userButtons.map((el:object) => <li key={el.key}><Button onClick={() => navigate(el.routes)} variant="contained" color="secondary" key={el.buttonName}>{el.buttonName}</Button></li>)}
    </ul>
  );
}

export default UserButtonsMenu;
