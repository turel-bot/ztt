import { isNode } from '../';

function Callback<F extends (...args: any[]) => any, C extends <Z>(args: [NodeJS.ErrnoException | null | Error, Z]) => any, A extends any[]>(func: F, cb: C, args?: A): void
{
    let calledFunc: any;

    try
    {
        args ? calledFunc = func(args) : calledFunc = func();
    }
    catch(err: unknown)
    {
        let cErr: NodeJS.ErrnoException | null | Error = err as Error;

        if(isNode)
            cErr = isErrNoException(err) ? err : null;

        cb([cErr, null]);
    }

    cb([null, calledFunc]);
}


/** @private */
const isErrNoException = (_err: unknown): _err is NodeJS.ErrnoException => true;

export default Callback;