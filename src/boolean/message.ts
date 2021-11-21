import MessageInterface from "../message";
import ObjectProperty from "@dikac/t-object/property/boolean/exists";

/**
 * check if {@param value} is compatible with {@link MessageInterface}
 */
export default function Message(
    value : object,
) : value is MessageInterface {

    return ObjectProperty(value, 'message');
}
