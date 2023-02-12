import Message from '../message.js';

/**
 * get {@link Message.message} type
 */
type Infer<Type> = Type extends Message<infer As> ? As : never;

export default Infer;
