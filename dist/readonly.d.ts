import Message from "./message";
import Infer from "./return/return";
export default class Readonly<Container extends Message = Message> implements globalThis.Readonly<Message<Infer<Container>>> {
    subject: Container;
    constructor(subject: Container);
    get message(): Infer<Container>;
}
