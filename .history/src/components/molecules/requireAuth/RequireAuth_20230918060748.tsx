import Data from "../../context/localhostContext"

const RequireAuth = () => {
    const userData = new Data("user");
    const getUserData = userData.getData()
    console.log(getUserData);
    return (
        getUserData.use
    )
}

export default RequireAuth