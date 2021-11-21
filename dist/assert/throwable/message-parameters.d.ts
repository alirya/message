import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
export default function MessageParameters(string: object, message?: Dynamic<object, string>, error?: (message: string) => Error): Error;
