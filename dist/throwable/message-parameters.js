import SafeCast from "@dikac/t-string/safe-cast";
import Value from "../message/value";
import New from "@dikac/t-function/new";
export default function MessageParameters(message, conversion = (result) => SafeCast(Value(result)), throwable = New(Error)) {
    return throwable(conversion(message));
}
//# sourceMappingURL=message-parameters.js.map