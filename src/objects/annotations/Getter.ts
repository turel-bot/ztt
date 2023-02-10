import FirstUppercasedStr from './util';

/**
 * @description Generates a Getter for a property.
 * @param {boolean} accessor - Should it be an accessor or a value? EX: .thing or #getThing 
 * @returns {any}
 */
function Getter(accessor: boolean = false): any
{
    return (target: unknown, key: string): any =>
    {
        const parsedName: string = FirstUppercasedStr(key, true, typeof (target as Record<string, unknown>)[key] === 'boolean');

        if(accessor)
            Object.defineProperty(target, parsedName, { get: () => (target as Record<string, unknown>)[key] });
        else
            Object.defineProperty(target, parsedName, { value: () => (target as Record<string, unknown>)[key] });
    };
}

export default Getter;