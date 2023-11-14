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
import { Messages } from "./messageObj";
import { MessageObject } from "./messageObject";
import e from "express";

interface MessageModel {
  state: {
    subordinatesArr: UserModel[];
  };
  getFormElements: (
    action: REDUCER_ACTION_TYPE,
    payloadElement: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleMessage: () => void;
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
    const [userObj] = subordinatesArr.filter(
      (el: UserModel) => `${el.firstName} ${el.lastName}` == state.addressee,
    );
    const messObj = new MessageObject(state.messageText);
    const messageObj = new Messages(
      state.messageReason,
      getUserData.id,
      userObj.id,
    );
    messageObj.sentMessage(messObj);
    const messageData = new Data("message");

      const setNewMessage = (obj: any) => {
          dispatch({
              type: REDUCER_ACTION_TYPE.SET_COUNTER,
              payload: ++state.messageCounter
        })
      const messArr = messageData.getData();
      messageData.setData([...messArr, obj]);
    };
    if (messageData.getData() != null) {
      setNewMessage(messageObj);
    } else {
      messageData.setData([]);
      setNewMessage(messageObj);
    }
  };
    
    
    useEffect(() => {
        
        
    }, [state.messageCounter]);

  return (
    <MessageContext.Provider value={{ state, getFormElements, handleMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
