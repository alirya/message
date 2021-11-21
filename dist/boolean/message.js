import ObjectProperty from "@dikac/t-object/property/boolean/exists";
/**
 * check if {@param value} is compatible with {@link MessageInterface}
 */
export default function Message(value) {
    return ObjectProperty(value, 'message');
}
//# sourceMappingURL=message.js.map