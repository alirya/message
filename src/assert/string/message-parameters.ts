import Name from '@alirya/object/string/name';

export default function MessageParameters(
    value : object,
    valid : boolean,
    subject : string = ''
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
