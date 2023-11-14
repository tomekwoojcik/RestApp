import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";
import { UserModel } from "../../interface/responseModel";
import { getUsersResource } from "./UserResourceApi";
import Data from "./localhostContext";

interface MessageModel {
    
}

export const MessageContext = createContext({} as MessageModel)

const userToken: string | any = localStorage.getItem("userToken");

const userData = new Data("user");
const getUserData: UserModel = userData.getData();
export const subordinatesArr: UserModel[] = (
  await getUsersResource(userToken)
).data.filter(
  (userObj: UserModel) =>
    userObj.company && userObj.company.supervisorId == getUserData.id,
);

export const MessageProvider = ({children}: propsModel) => {
    


    return (
        <MessageContext.Provider value={{}}>
            {children}
        </MessageContext.Provider>
    )
}