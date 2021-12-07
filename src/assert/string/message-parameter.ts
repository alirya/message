import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import MessageParameters from "./message-parameters";
//import Sentences from "@dikac/t-string/message/sentences";

export default function MessageParameter(
    //value : object,
    //valid : boolean,
    //subject : string = '',
    {
        value,
        valid,
        subject,
    } : Value<object> & Validatable & {
        subject : string
    }
) : string {

    return MessageParameters(value, valid, subject);
}
