import { Navigate, Outlet, useLocation } from "react-router";
import Data from "../../context/localhostContext";
import { FC } from "react";

const RequireAuth : FC = () => {
  const userData = new Data("user");
  const getUserData = userData.getData();
  console.log(getUserData);
  const location = useLocation();
    return (
        getUserData?.id
        ? <Outlet />
        : <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
