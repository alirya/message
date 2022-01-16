import MessageType from '../string/message-parameters';
import Callback from '@alirya/function/assert/throwable/callback-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';


export default function MessageParameters(
    value : object,
    message : Dynamic<object, string> = MessageType,
    error : (message:string)=>Error = (string : string) => new Error(string)
) : Error {

    return Callback([value, false], message, error);
}
