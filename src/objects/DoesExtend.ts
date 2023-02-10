/**
 * @description Check if a class extends from another. (Assuming you know both classes)
 * @param extendsFrom - The class you believe toCheck extends from.
 * @param toCheck - The class to see if it extends extendsFrom
 * @returns {boolean} truthy or falsey value based on if it does or does not extend from extendsFrom
 */
const DoesExtend = <E extends new (...args: any[]) => any, T extends new (...args: any[]) => any>(extendsFrom: E, toCheck: T): boolean =>
    Object.prototype.isPrototypeOf.call(extendsFrom.prototype, toCheck.prototype as Record<string, unknown>); /**  Cast toCheck.prototype to ANY Object so we pass the type checking. */

export default DoesExtend;