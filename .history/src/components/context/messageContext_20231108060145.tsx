import { createContext, useEffect, useReducer } from "react";
import { propsModel } from "../../interface/interfaceProps";
import { UserModel } from "../../interface/responseModel";
import { getUsersResource } from "./UserResourceApi";
import Data from "./localhostContext";
import {
  REDUCER_ACTION_TYPE,
  initState,
  reducer,
} from "../../hooks/messageHooks";
import { Message } from "./messageObj";

interface MessageModel {
  state: {
    subordinatesArr: UserModel[];
  };
  getFormElements: (
    action: REDUCER_ACTION_TYPE,
    payloadElement: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export const MessageContext = createContext({} as MessageModel);

const userToken: string | any = localStorage.getItem("userToken");

const userData = new Data("user");
const getUserData: UserModel = userData.getData();
export const subordinatesArr: UserModel[] = (
  await getUsersResource(userToken)
).data.filter(
  (userObj: UserModel) =>
    userObj.company && userObj.company.supervisorId == getUserData.id,
);

export const MessageProvider = ({ children }: propsModel) => {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    dispatch({
      type: REDUCER_ACTION_TYPE.GET_SUBORDINATES,
      payload: subordinatesArr,
    });
  }, []);

  const getFormElements = (
    action: REDUCER_ACTION_TYPE,
    payloadElement: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch({
      type: action,
      payload: payloadElement.target.value,
    });
  };
    
    const handleMessage = () => {
        const [userObj] = subordinatesArr.filter((el: UserModel) => `${el.firstName} ${el.lastName}` == state.addressee);
        const messageObj = new Message(state.messageReason, getUserData.id, userObj.id);
    }
    
  return (
    <MessageContext.Provider value={{ state, getFormElements }}>
      {children}
    </MessageContext.Provider>
  );
};
