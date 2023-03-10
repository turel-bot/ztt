import NotNull from './validate/NotNull';

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

    // done in order to 
    // a. deep clone the object
    // if we say, use the spread operator
    // EX: { ...object }
    // if we edit a part of the object (due to it being shallow)
    // on the original call,
    // the one we get back from #clone will be modified
    // (look @ example below as well)
    // b. allow for the objects to be different 
    // so if you do say, 
    // const a = { a: 'b', c: [ 'd' ] }; 
    // const z = Clone(a);
    // a[0][1] = 'b';
    // // z[0][1] === 'b'
    return JSON.parse(JSON.stringify(val)) as T;
};

export default Clone;