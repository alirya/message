import Message from '../message';
import SafeCast from '@alirya/string/safe-cast';
import Value from '../message/value';
import New from '@alirya/function/new';
import ValueType from '@alirya/value/value';

export function MessageParameters<MessageType extends Message>(
    message : MessageType,
    conversion : (result : MessageType) => string = (result)=>SafeCast(Value(result)),
    throwable : (message:string)=>Error = New(Error)
) : Error {

    return throwable(conversion(message));
}

export type MessageArgument<MessageType extends Message> = ValueType<MessageType> & {
    conversion : (result : MessageType) => string,
    throwable : (message:string)=>Error
};


export function MessageParameter<MessageType extends Message>(
    {
        value,
        conversion,
        throwable
    } : MessageArgument<MessageType>
) : Error {

    return MessageParameters(value, conversion, throwable);
}


namespace Message {
    export const Parameters = MessageParameters;
    export const Parameter = MessageParameter;
    export type Argument<MessageType extends Message> = MessageArgument<MessageType>;
}
export default Message;
