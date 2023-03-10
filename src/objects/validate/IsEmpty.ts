/**
 * @param {T} obj - The Object to test if it is empty.
 * @returns {boolean} If the Object is empty.
 * @throws If you pass a paramater that is not an actual Object.
 */
const IsEmpty = <T>(obj: T): boolean =>
{
    if(typeof obj !== 'object')
        throw new Error('Param passed to #IsEmpty was not an Object.');

    return Object.getOwnPropertyNames(obj).length === 0;
};

export default IsEmpty;