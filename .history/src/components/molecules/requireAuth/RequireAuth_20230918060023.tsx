import Data from "../../context/localhostContext"

const RequireAuth = () => {
    const userData = new Data("user");
    const getUserData: any = userData.getData()
    console.log(getUserData);
    return (
        <div>
            
        </div>
    )
}

export default RequireAuth