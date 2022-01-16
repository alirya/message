import MessageInterface from "../message";
import ObjectProperty from "@alirya/object/property/boolean/exists";

/**
 * check if {@param value} is compatible with {@link MessageInterface}
 */
export default function Message(
    value : object,
) : value is MessageInterface {

    return ObjectProperty(value, 'message');
}
