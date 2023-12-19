/**
 * Map array and filter null values from array
 * @param values - array to map/filter
 * @param mapFunction - function to map values to value or null to be filtered
 */
export const compactMap = <T, R>(values: T[], mapFunction: (val: T) => R | null): R[] =>
  values.map(mapFunction).filter((value) => value !== null) as R[]

/**
 * Make object from entries, forced to use key typing
 * @param entries - [key, value]
 */
export const fromEntries = <K extends PropertyKey, T>(entries: Iterable<readonly [K, T]>): { [key in K]: T } =>
  Object.fromEntries(entries) as { [key in K]: T }
