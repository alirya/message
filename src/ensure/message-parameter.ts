import MessageInterface from "../message";
import Value from "@alirya/value/value";
import MessageParameters from "./message-parameters";

/**
 * return {@param value} is compatible with {@link MessageInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param value} is not compatible
 */
export default function MessageParameter(
    {
        value,
        error,
    } : Value<object> & {error ?: (value:object)=>Error}
) : MessageInterface {

    return MessageParameters(value, error);
}
