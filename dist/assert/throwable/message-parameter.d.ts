import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
import Value from "@dikac/t-value/value";
import Message from "../../message";
export default function MessageParameter({ value, message, error, }: Value<object> & Message<Dynamic<object, string>> & {
    error?: (message: string) => Error;
}): Error;
