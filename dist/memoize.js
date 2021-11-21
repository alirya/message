// TODO MOVE READONLY TO PROXY
// import Message from "./message";
// import Infer from "./message/infer";
// import ObjectProperty from "@dikac/t-object/value/property";
// import ValueMemoize from "@dikac/t-value/memoize";
//
// /**
//  * Wrap {@link Message} and cache its value
//  *
//  * suitable to cached value from heave operation
//  * @deprecated
//  */
// export default class Memoize<
//     MessageTemplate extends Message
// > implements
//     Readonly<Message<Infer<MessageTemplate>>>
// {
//     public memoize : ValueMemoize<ObjectProperty<'message', MessageTemplate>>;
//
//     constructor(
//         public subject : MessageTemplate
//     ) {
//
//         let value = new ObjectProperty(subject, 'message');
//         this.memoize = new ValueMemoize(value);
//     }
//
//
//     get message () : Infer<MessageTemplate> {
//
//         return <Infer<MessageTemplate>> this.memoize.value;
//     }
//
// }
//# sourceMappingURL=memoize.js.map