import Dynamic from "@alirya/validator/message/function/validatable-parameters";
import Value from "@alirya/value/value";
import Message from "../../message";
import MessageParameters from "./message-parameters";

export default function MessageParameter(
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
