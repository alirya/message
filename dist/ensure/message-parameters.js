import AssertString from "../assert/message";
import MessageError from "../assert/throwable/message-parameters";
/**
 * return {@param value} is compatible with {@link MessageInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param value} is not compatible
 */
export default function MessageParameters(value, error = MessageError) {
    AssertString(value, error);
    return value;
}
//# sourceMappingURL=message-parameters.js.map