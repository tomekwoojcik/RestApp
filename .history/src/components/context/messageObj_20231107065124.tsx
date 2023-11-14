import { nanoid } from "nanoid"

class Message {
    messageId: string;
    messageReason: string;

    constructor(messageReason: string, employeeId: string, supervisorId: string, objId: string) {
        this.messageId = nanoid();
        this.messageReason = messageReason;
    }
}