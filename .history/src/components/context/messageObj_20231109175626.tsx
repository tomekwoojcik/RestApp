import { nanoid } from "nanoid";
interface messageObj {
  messageDate: Date;
  textMessage: string;
}
export class Messages {
  conversationStarter: Date;
  messageId: string;
  messageReason: string;
  employeeId: number;
  supervisorId: number;
  messagesArr: messageObj[];
  endOfConversation: null | Date;

  constructor(messageReason: string, employeeId: number, supervisorId: number) {
    this.conversationStarter = new Date();
    this.messageId = nanoid();
    this.messageReason = messageReason;
    this.employeeId = employeeId;
    this.supervisorId = supervisorId;
    this.messagesArr = [];
    this.endOfConversation = null;
  }

  sentMessage(messageObj: messageObj) {
    this.messagesArr.push(messageObj);
  }
}
