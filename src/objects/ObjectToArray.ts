type ObjectToArrT<T extends Record<string, unknown>> = T[KeysOfGenericObject<T>];
type KeysOfGenericObject<T extends Record<string, unknown>> = keyof T;

/**
 * @description Converts an Object into an Array.
 * @param {T} obj - The Object to convert into an array. 
 * @returns {ObjectToArrT<T>} An Object converted into an array.
 * @warning TYPES ARE FUZZY.
 */
function ObjectToArray<T extends Record<string, unknown>>(obj: T): ObjectToArrT<T>[];
function ObjectToArray<T extends Record<string, unknown>>(obj: T, opts: { keepKeys: boolean; }): ObjectToArrT<T>[]
function ObjectToArray<T extends Record<string, unknown>>(obj: T, opts?: { keepKeys: boolean; }): ObjectToArrT<T>[]
{
    opts ? opts : {
        keepKeys: true
    };

    const arr: any[] = [];
    const vals: unknown[] = Object.values(obj);

    if(opts?.keepKeys)
    {
        const keys: unknown[] = Object.keys(obj);
        for(let i: number = 0; i < vals.length; i++)
            arr.push([keys[i], vals[i]]);
    }
    else
    {
        for(let i: number = 0; i < vals.length; i++)
            arr.push(vals[i]);
    }


    return arr;
}

export default ObjectToArray;