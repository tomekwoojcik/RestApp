import { Button } from '@mui/material';
import { useContext } from 'react';
import UserButtonsMenu from '../../molecules/userButtonsMenu/userButtonsMenu';
import UserContext from '../../context/userContext';

function UserMenu() {
  const { data } = useContext(UserContext);
  return (
    <div>
      <div className="urlopApp__companyLogo" />
      <h3>
        {`Hello ${!data ? undefined : `${data.firstName} ${data.lastName}`}`}
      </h3>
      <UserButtonsMenu />
      <Button>LogOff</Button>
    </div>
  );
}

export default UserMenu;
