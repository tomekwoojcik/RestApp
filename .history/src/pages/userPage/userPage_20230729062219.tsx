import { Outlet } from 'react-router';
import { UserProvider } from '../../components/context/userContext';
// eslint-disable-next-line import/no-named-as-default
import UserMenu from '../../components/organisms/userMenu/userMenu';
import { FC } from 'react';

const UserPage:FC = () => {
  return (
    <UserProvider>
      <div className="urlopApp__userPage">
        <UserMenu />
        <Outlet />
      </div>
    </UserProvider>
  );
}

export default UserPage;
