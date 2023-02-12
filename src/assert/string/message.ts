import Name from '@alirya/object/string/name.js';
import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';

export function MessageParameters(
    value : object,
    valid : boolean,
    subject  = ''
) : string {

    const strings : string[] = [];

    strings.push(subject, `"${Name(value)}"`);

    if(valid) {

        strings.push('is compatible with');

    } else {

        strings.push('is not compatible with');
    }

    strings.push('Message type');

    return strings.join(' ') + '.';
}


export type MessageArgument = Value<object> & Validatable & {
    subject : string
};

export function MessageParameter(
    {
        value,
        valid,
        subject,
    } : MessageArgument
) : string {

    return MessageParameters(value, valid, subject);
}


namespace Message {
    export const Parameters = MessageParameters;
    export const Parameter = MessageParameter;
}
export default Message;
