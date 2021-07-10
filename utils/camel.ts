function camelizeString(s: string): string {
    return s.replace(/([-_][a-z])/gi, ($1) => {
        return $1.toUpperCase().replace("-", "").replace("_", "");
    });
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function camelize(object: Object | string): string | Object {
    if (typeof object === "string") return camelizeString(object);
    if (typeof object !== "object") return object;
    if (typeof object === "object") {
        return Object.entries(object).reduce((carry, [key, value]) => {
            // @ts-expect-error This is a valid index, even though TypeScript thinks it isn't
            carry[camelizeString(key)] = value;
            return carry;
        }, {});
    }
    return "";
}
