import { FC } from "react";
import { Outlet } from "react-router";
import LayoutModule from "./Layout.module.scss";
const Layout: FC = () => {
  return (
    <main className={LayoutModule.main}>
      <Outlet />
    </main>
  );
};

export default Layout;
