import NotNull from './NotNull';

/**
 * @description Clones an Object.
 * @param {T} val - The Object to clone. 
 * @returns {T}
 */
const Clone = <T>(val: T): T =>
{
    NotNull(val, 'Cannot clone an Object that is null.');

    if(typeof val !== 'object')
        return val;

    if(Array.isArray(val))
        return [...val] as T;

    return { ...val };
};

export default Clone;