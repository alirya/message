import MessageInterface from '../message.js';
import {ExistsParameters} from '@alirya/object/property/boolean/exists.js';

/**
 * check if {@param value} is compatible with {@link MessageInterface}
 */
export default function Message(
    value : object,
) : value is MessageInterface {

    return ExistsParameters(value, 'message');
}
