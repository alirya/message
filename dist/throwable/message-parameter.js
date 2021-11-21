import MessageParameters from "./message-parameters";
export default function MessageParameter(
// object : MessageType,
// conversion : (result : MessageType) => string = (result)=>SafeCast(Value(result)),
// throwable : (message:string)=>Error = New(Error),
{ value, conversion, throwable }) {
    return MessageParameters(value, conversion, throwable);
}
//# sourceMappingURL=message-parameter.js.map