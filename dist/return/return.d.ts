import MessageInterface from "../message";
declare type Return<Type> = Type extends MessageInterface<infer As> ? As : never;
export default Return;
