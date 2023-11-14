import { createContext, useEffect, useReducer } from "react";
import { propsModel } from "../../interface/interfaceProps";
import { UserModel } from "../../interface/responseModel";
import { getUsersResource } from "./UserResourceApi";
import Data from "./localhostContext";
import { REDUCER_ACTION_TYPE, initState, reducer } from "../../hooks/messageHooks";



interface MessageModel {
    state: {
        subordinatesArr: UserModel[],
    }
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
    const [state, dispatch] = useReducer(reducer, initState);

    useEffect(() => {
        dispatch({
            type: REDUCER_ACTION_TYPE.GET_SUBORDINATES,
            payload: subordinatesArr
        })
    }, []);


    return (
        <MessageContext.Provider value={{state}}>
            {children}
        </MessageContext.Provider>
    )
}