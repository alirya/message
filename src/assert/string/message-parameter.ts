import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import MessageParameters from "./message-parameters";

export default function MessageParameter(
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
