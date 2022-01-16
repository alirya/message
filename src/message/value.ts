import Infer from './infer';
import Message from '../message';

/**
 * get {@link Message.message} value
 *
 * @param message
 * object tobe extracted
 */
export default function Value<MessageTemplate extends Message>(message : MessageTemplate) : Infer<MessageTemplate> {

    return <Infer<MessageTemplate>> message.message;
}
