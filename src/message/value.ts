import Infer from './infer.js';
import Message from '../message.js';

/**
 * get {@link Message.message} value
 *
 * @param message
 * object tobe extracted
 */
export default function Value<MessageTemplate extends Message>(message : MessageTemplate) : Infer<MessageTemplate> {

    return <Infer<MessageTemplate>> message.message;
}
