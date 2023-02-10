import obj from '../';
import { isNode } from '../';

declare let window: any;

/** @description Makes the Objects variable globally available. */
const makeGlobal = (): void =>
{
    if(isNode)
    {
        if(!global)
            return;

        global.Objects = obj;
        return;
    }

    if(!window)
        return;

    window.Objects = obj;
};

export default makeGlobal;