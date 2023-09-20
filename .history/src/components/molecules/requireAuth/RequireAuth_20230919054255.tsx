import { Navigate, Outlet, useLocation } from "react-router";
import Data from "../../context/localhostContext";
import { FC } from "react";

interface RequireModel {
  allowedRole: string;
}

const RequireAuth: FC<RequireModel> = ({ allowedRole }) => {
  const userData = new Data("user");
  const getUserData = userData.getData();
  const location = useLocation();
  return (getUserData?.company?.title.find((role: string) =>
      allowedRole.includes(role))
      ? <Outlet />
      : getUserData?.id
       ?  <Navigate to="/unauthorized" state={{ from: location }} replace />  
      ?<Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
