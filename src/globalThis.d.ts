/* eslint-disable @typescript-eslint/no-namespace */
import type objectsObj from './objects';

declare namespace globalThis
{
    // this is required
    // eslint-disable-next-line no-var
    var Objects: typeof objectsObj;
}

export { };