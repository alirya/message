import Dynamic from "@dikac/t-validator/message/function/validatable-parameters";
import Value from "@dikac/t-value/value";
import Message from "../../message";
import MessageParameters from "./message-parameters";


export default function MessageParameter(
    //string : object,
    //message : Dynamic<object, string> = MessageType,
    //error : (message:string)=>Error = (string : string) => new Error(string),
    {
        value,
        message,
        error,
    } : Value<object> & Message<Dynamic<object, string>> & {
        error ?: (message:string)=>Error
    }
) : Error {

    return MessageParameters(value, message, error);

}
