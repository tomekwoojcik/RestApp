import { MessageProvider } from "../../context/messageContext";
import MessageForm from "../../molecules/messageForm/messageForm";
import MessageList from "../messageList/messageList";

const UserMessage = ()=> {
  return (
    <MessageProvider>
      <MessageForm />
      <MessageList/>
    </MessageProvider>
  );
}

export default UserMessage;
