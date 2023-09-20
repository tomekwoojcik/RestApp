import { Navigate, Outlet } from "react-router";
import Data from "../../context/localhostContext"

const RequireAuth = () => {
    const userData = new Data("user");
    const getUserData = userData.getData()
    console.log(getUserData);
    return (
        getUserData?.id ? <Outlet/> : <Navigate to "/login" stat
    )
}

export default RequireAuth