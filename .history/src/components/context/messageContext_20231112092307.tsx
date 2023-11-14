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

interface MessageObjectModel {
  conversationStarter: Date;
  messageId: string;
  messageReason: string;
  employeeId: number;
  messageRecipient: number;
  messagesArr: MessageObject[];
  endOfConversation: null | Date;
}

interface MessageModel {
  state: {
      subordinatesArr: UserModel[];
      messageObjArr: Messages[];
      messageObj: {
      conversationStarter: any,
      messageId: "",
      messageReason: "",
      employeeId: 0,
      messageRecipient: 0,
      messagesArr: [],
      endOfConversation: null,
      };
  };
  getFormElements: (
    action: REDUCER_ACTION_TYPE,
    payloadElement: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
    handleMessage: () => void;
    setMessageInRoom: (messageObj:MessageObjectModel) => void;
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

  const messageData = new Data("message");

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

    const setNewMessage = (obj: MessageObjectModel) => {
      dispatch({
        type: REDUCER_ACTION_TYPE.SET_COUNTER,
        payload: ++state.messageCounter,
      });
      const messArr: MessageObjectModel[] = messageData.getData();
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
    const data: MessageObjectModel[] = messageData
      .getData()
      .filter((obj: MessageObjectModel) => obj.employeeId == getUserData.id);
    dispatch({
      type: REDUCER_ACTION_TYPE.GET_MESSAGE_OBJ_DATA,
      payload: data,
    });
  }, [state.messageCounter]);
    
    const setMessageInRoom = (messageObj:MessageObjectModel) :void=> {
        dispatch({
            type: REDUCER_ACTION_TYPE.HANDLE_MESSAGE_OBJ,
            payload: messageObj
        });
    }
    
    console.log(state.messageObj)


  return (
    <MessageContext.Provider value={{ state, getFormElements, handleMessage, setMessageInRoom }}>
      {children}
    </MessageContext.Provider>
  );
};
