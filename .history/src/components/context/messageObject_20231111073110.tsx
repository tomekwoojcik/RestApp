import { nanoid } from "nanoid";

export interface MessageObjectModel {
  messageId: string;
  date: Date;
  message: string;
}

export class MessageObject {
  messageId: string;
  date: Date;
  message: string;

  constructor(text: string) {
    this.messageId = nanoid();
    this.date = new Date();
    this.message = text;
  }
}
