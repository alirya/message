import MessageType from "../string/message-parameters";
import Callback from "@dikac/t-function/assert/throwable/callback-parameters";
export default function MessageParameters(string, message = MessageType, error = (string) => new Error(string)) {
    return Callback([string, false], message, error);
}
//# sourceMappingURL=message-parameters.js.map