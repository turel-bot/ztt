/**
 * @description Checks if an Object is null, if it is throws an Error.
 * @param {T} val - The to check if is null.  
 * @throws
 */
function NotNull<T>(val: T): void;
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
function NotNull<T>(val: T, message?: string, error?: new (message: string) => Error): void;
/**
 * @description Checks if an Object is null, if it is throws an Error.
 * @param {T} val - The to check if is null.  
 * @param {string?} message - The message to throw the Error with. (if you'd like to provide a custom one.)
 * @param {Error?} error - The type of Error (the class, nor an instance.)
 * @throws
 */
function NotNull<T>(val: T, message?: string, error?: new (message: string) => Error): void
{
    // I love this ternary.
    message = message ? message : 'Value passed to NotNull was, indeed, null.';

    if(val === null)
        // throws the error you wanted, or the custom Error you passed.
        error ? ThrowError(error, message) : ThrowError(Error, message);
}

/**
 * @private
 * @description Wraps throwing an Error so we can use a ternary statement.
 * @throws
 */
function ThrowError(error: new (message: string) => Error, message: string): void
{
    throw new error(message);
}

export default NotNull;