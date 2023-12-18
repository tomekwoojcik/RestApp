import { FC } from "react";
import { Outlet } from "react-router";
import LayoutModule from './layout.module.scss';
const Layout: FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Layout;
