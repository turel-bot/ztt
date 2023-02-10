/**
 * @description Checks if an Object is null, if it is throws an Error.
 * @param {T} val - The to check if is null.  
 * @throws
 */
function NotNull<T>(val: T): void
/**
 * @description Checks if an Object is null, if it is throws an Error.
 * @param {T} val - The to check if is null.  
 * @param {string} message - The message to throw the Error with. (if you'd like to provide a custom one.)
 * @throws
 */
function NotNull<T>(val: T, message: string): void;
/**
 * @description Checks if an Object is null, if it is throws an Error.
 * @param {T} val - The to check if is null.  
 * @param {string?} message - The message to throw the Error with. (if you'd like to provide a custom one.)
 * @throws
 */
function NotNull<T>(val: T, message?: string): void
{
    // I love this ternary.
    message = message ? message : 'Value passed to NotNull was, indeed, null.';

    if(val === null)
        throw new Error(message);
}

export default NotNull;