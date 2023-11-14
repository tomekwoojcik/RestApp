import { MessageProvider } from "../../context/messageContext";
import MessageForm from "../../molecules/messageForm/messageForm";
import MessageList from "../messageList/messageList";

const UserMessage = () => {
  return (
    <MessageProvider>
      <div>
        <MessageForm />
        <MessageList />
      </div>
    </MessageProvider>
  );
};

export default UserMessage;
