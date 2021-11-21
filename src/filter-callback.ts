// import Message from "./message";
// import Return from "./message/infer";
//
// /**
//  * filter value {@param message} with given {@param callback}
//  *
//  * return value {@param callback} use for populate message data
//  *
//  * @param message
//  * @param callback
//  */
//
// export default class FilterCallback<
//     Replace,
//     Original extends Message = Message
// > {
//
//     constructor(
//         readonly subject : Original,
//         readonly callback : (message:Return<Original>)=>Replace
//     ) {
//     }
//
//     get message() : Return<Original>  {
//
//         return this.callback(<Return<Original>>this.subject) as Return<Original>;
//     }
// }
