import { MessageProvider } from "../../context/messageContext";
import MessageForm from "../../molecules/messageForm/messageForm";

const UserMessage = ()=> {
  return (
    <MessageProvider>
      <MessageForm />
      
    </MessageProvider>
  );
}

export default UserMessage;
