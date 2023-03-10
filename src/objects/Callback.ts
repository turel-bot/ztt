function Callback<F extends (...args: any[]) => any, C extends <Z>(args: [Error | null, Z]) => any, A extends any[]>(func: F, cb: C, args?: A): void
{
    let calledFunc: any;

    try
    {
        args ? calledFunc = func(args) : calledFunc = func();
    }
    catch(err: unknown)
    {
        cb([err as Error, null]);
    }

    cb([null, calledFunc]);
}


export default Callback;