import e from "express";
import { nanoid } from "nanoid"

export class Message {
    messageId: string;
    messageReason: string;
    employeeId: string;
    supervisorId: string;
    messageArr: [];

    constructor(messageReason: string, employeeId: string, supervisorId: string) {
        this.messageId = nanoid();
        this.messageReason = messageReason;
        this.employeeId = employeeId;
        this.supervisorId = supervisorId;
        this.messageArr= []
    }
};