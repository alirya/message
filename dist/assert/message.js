import Guard from "../boolean/message";
import Callback from "@dikac/t-function/assert/callback-parameters";
import StringError from "./throwable/message-parameters";
/**
 * assert {@param value} is compatible with {@link MessageInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if  {@param value} is not compatible
 */
export default function Message(value, error = StringError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=message.js.map