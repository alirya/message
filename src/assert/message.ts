import Guard from '../boolean/message.js';
import {CallbackParameters} from '@alirya/function/assert/callback.js';
import {MessageParameters} from './throwable/message.js';
import MessageInterface from '../message.js';


/**
 * assert {@param value} is compatible with {@link MessageInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if  {@param value} is not compatible
 */
export default function Message(
    value : object,
    error : (value:object)=>Error = MessageParameters
) : asserts value is MessageInterface {

    CallbackParameters(value, Guard, error);
}
