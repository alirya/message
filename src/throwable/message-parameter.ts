import Message from '../message';
import MessageParameters from './message-parameters';
import Value from '@alirya/value/value';

export default function MessageParameter<MessageType extends Message>(
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
