function camelizeString(s: string): string {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
}

export function camelize(object: Object | string): string | Object {
  if (typeof object === "string") return camelizeString(object);
  if (typeof object !== "object") return object;
  if (typeof object === "object") {
    return Object.entries(object).reduce((carry, [key, value]) => {
      // @ts-expect-error
      carry[camelizeString(key)] = value;
      return carry;
    }, {});
  }
  return "";
}
