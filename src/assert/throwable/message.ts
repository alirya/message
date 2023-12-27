import MessageType from '../string/message.js';
import {CallbackParameters} from '@axiona/function/assert/throwable/callback.js';
import {ValidatableParameters} from '@axiona/validator/message/function/validatable.js';
import Value from '@axiona/value/value.js';
import Message from '../../message.js';


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
