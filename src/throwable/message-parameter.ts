import Message from "../message";
import SafeCast from "@dikac/t-string/safe-cast";
import New from "@dikac/t-function/new";
import MessageParameters from "./message-parameters";
import Value from "@dikac/t-value/value";

export default function MessageParameter<MessageType extends Message>(
    // object : MessageType,
    // conversion : (result : MessageType) => string = (result)=>SafeCast(Value(result)),
    // throwable : (message:string)=>Error = New(Error),
    {
        value,
        conversion,
        throwable
    } : Value<MessageType> & {
        conversion : (result : MessageType) => string,
        throwable : (message:string)=>Error
    }
) : Error {

    return MessageParameters(value, conversion, throwable);
}
