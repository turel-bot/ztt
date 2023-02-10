/**
 * @description
 * INPUT:
 * [['a', {}],
 * ['b', { c: 'd' }],
 * ['c', []],
 * ['d', ['a', 'b']]
 * 
 * OUTPUT:
 * {
 * "a": {},
 * "b": {
 *   "c": "d"
 * },
 * "c": [],
 * "d": [
 *   "a",
 *   "b"
 *  ]
 * }
 * 
 * 
 * @param arr 
 * @returns {unknown} Due to Typescript being.. Typescript; without sum Typescript magic, this won't provide proper types. Please cast or just accept the "unknown".
 */
const ArrayToObject = (arr: [string, unknown][]): unknown =>
{
    const object = {};

    for(let i: number = 0; i < arr.length; i++)
    {
        if(arr[i][0] === undefined)
            continue;

        // @ts-expect-error this is valid
        object[arr[i][0]] = arr[i][1];
    }

    return object;
};

export default ArrayToObject;