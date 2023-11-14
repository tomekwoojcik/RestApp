import { nanoid } from "nanoid";
interface messageObj {
  messageDate: Date;
  textMessage: string;
}
export class Message {
  conversationStarter: Date;
  messageId: string;
  messageReason: string;
  employeeId: number;
  supervisorId: number;
    messageArr: messageObj[];
    endOfConversation: null | Date;

  constructor(messageReason: string, employeeId: number, supervisorId: number) {
    this.conversationStarter = new Date();
    this.messageId = nanoid();
    this.messageReason = messageReason;
    this.employeeId = employeeId;
    this.supervisorId = supervisorId;
      this.messageArr = [];
      this.endOfConversation = null;
  }

  sentMessage(text: messageObj) {
    this.messageArr.push(text);
  }
}
