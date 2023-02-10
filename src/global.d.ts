/* eslint-disable @typescript-eslint/no-namespace */
import type zzzzz from './objects';

declare global
{
    // this is required
    // eslint-disable-next-line no-var
    var Objects: typeof zzzzz | undefined;
}

export {  };