import Guard from "../boolean/message";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";
import StringError from "./throwable/message";
import MessageInterface from "../message";


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
    error : Function<[object], Error> = StringError
) : asserts value is MessageInterface {

    Callback(value, Guard, error);
}
