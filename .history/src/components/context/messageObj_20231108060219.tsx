import { nanoid } from "nanoid"

export class Message {
    messageId: string;
    messageReason: string;
    employeeId: number;
    supervisorId: number;
    messageArr: [];

    constructor(messageReason: string, employeeId: number, supervisorId: number) {
        this.messageId = nanoid();
        this.messageReason = messageReason;
        this.employeeId = employeeId;
        this.supervisorId = supervisorId;
        this.messageArr= []
    }
};