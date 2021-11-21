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
//value : object,
//error : (value:object)=>Error = MessageError,
{ value, error, }) {
    return MessageParameters(value, error);
    // AssertString(value, error);
    //
    // return value;
}
//# sourceMappingURL=message-parameter.js.map