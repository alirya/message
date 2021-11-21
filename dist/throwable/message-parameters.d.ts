import Message from "../message";
export default function MessageParameters<MessageType extends Message>(message: MessageType, conversion?: (result: MessageType) => string, throwable?: (message: string) => Error): Error;
