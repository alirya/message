import MessageType from '../string/message';
import {CallbackParameters} from '@alirya/function/assert/throwable/callback';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import Value from '@alirya/value/value';
import Message from '../../message';


export function MessageParameters(
    value : object,
    message : ValidatableParameters<object, string> = MessageType.Parameters,
    error : (message:string)=>Error = (string : string) => new Error(string)
) : Error {

    return CallbackParameters([value, false], message, error);
}


export function MessageParameter(
    {
        value,
        message,
        error,
    } : Value<object> & Message<ValidatableParameters<object, string>> & {
        error ?: (message:string)=>Error
    }
) : Error {

    return MessageParameters(value, message, error);

}


namespace Message {
    export const Parameters = MessageParameters;
    export const Parameter = MessageParameter;
}
export default Message;
