import { nanoid } from "nanoid";
import {}
export class Messages {
  conversationStarter: Date;
  messageId: string;
  messageReason: string;
  employeeId: number;
  messageRecipient: number;
  messagesArr: messageObj[];
  endOfConversation: null | Date;

  constructor(messageReason: string, employeeId: number, messageRecipient: number) {
    this.conversationStarter = new Date();
    this.messageId = nanoid();
    this.messageReason = messageReason;
    this.employeeId = employeeId;
    this.messageRecipient = messageRecipient;
    this.messagesArr = [];
    this.endOfConversation = null;
  }

  sentMessage(messageObj: messageObj) {
      this.messagesArr.push(messageObj);
  }
}
