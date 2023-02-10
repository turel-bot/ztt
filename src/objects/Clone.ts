/**
 * @description Clones an Object.
 * @param {T} val - The Object to clone. 
 * @returns {T}
 */
const Clone = <T extends Record<string, unknown>>(val: T): T =>
{
    return { ...val };
};

export default Clone;