export interface MessageObjectModel {
    date: Date;
    message: string;
}

export class MessageObject {

    date: Date;
    message: string;

    constructor(text: string) {
        this.date =  new Date();
        this.message = text;
    }
}