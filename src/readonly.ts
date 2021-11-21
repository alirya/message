// TODO MOVE READONLY TO PROXY
// import Message from "./message";
// import Infer from "./message/infer";
//
// /**
//  * construct readonly {@link Message}
//  * @deprecated
//  */
// export default class Readonly<
//     MessageTemplate extends Message = Message
// > implements
//     globalThis.Readonly<Message<Infer<MessageTemplate>>>
// {
//
//     constructor(
//         public subject: MessageTemplate
//     ) {
//     }
//
//     get message(): Infer<MessageTemplate> {
//
//         return <Infer<MessageTemplate>> this.subject.message;
//     }
// }
