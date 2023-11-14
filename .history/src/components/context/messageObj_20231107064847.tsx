import { nanoid } from "nanoid"

class Message {
    messageId: string;
    problemId: string;

    constructor(problemId: string, employeeId: string, supervisorId: string, objId: string) {
        this.messageId = nanoid();
        this.kindProblem = problemId;
    }
}