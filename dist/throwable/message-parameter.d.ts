import Message from "../message";
import Value from "@dikac/t-value/value";
export default function MessageParameter<MessageType extends Message>({ value, conversion, throwable }: Value<MessageType> & {
    conversion: (result: MessageType) => string;
    throwable: (message: string) => Error;
}): Error;
