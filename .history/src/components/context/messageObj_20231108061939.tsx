import { nanoid } from "nanoid"
import Data from "./localhostContext";

const messageArr = new Data('messageArr');

interface messageObj{
    messageDate: Date,
    textMessage: string,
}
export class Message {
    messageId: string;
    messageReason: string;
    employeeId: number;
    supervisorId: number;
    messageArr: messageObj[];

    constructor(messageReason: string, employeeId: number, supervisorId: number) {
        this.messageId = nanoid();
        this.messageReason = messageReason;
        this.employeeId = employeeId;
        this.supervisorId = supervisorId;
        this.messageArr = [];
    }
    
    sentMessage(text : messageObj) {
        this.messageArr.push(text);
        if (messageArr.getData() == null) {
            messageArr.setData([]);
        }
        
    }
};