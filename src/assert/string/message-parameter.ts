import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import MessageParameters from './message-parameters';

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
