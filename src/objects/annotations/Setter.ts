import FirstUppercasedStr from './util';

/**
 * @description Generates a Setter for a property.
 * @param {boolean} accessor - Should it be an accessor or a value? EX: .thing = '' or #getThing 
 * @returns {any}
 */
function Setter(accessor: boolean = false): any
{
    return (target: Record<string, unknown>, key: string): any =>
    {
        const parsedName: string = FirstUppercasedStr(key, false, typeof (target as Record<string, unknown>)[key] === 'boolean');

        if(accessor)
            Object.defineProperty(target, parsedName, { set: (arg: typeof target[typeof key]) => (target as Record<string, unknown>)[key] = arg });
        else
            Object.defineProperty(target, parsedName, { value: (arg: typeof target[typeof key]) => (target as Record<string, unknown>)[key] = arg });
    };
}

export default Setter;