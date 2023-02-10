/**
 * @description Allows for you to define static members using an interface. (ASSUMES ALL IN THE INTERFACE ARE STATIC)
 */
function StaticImplements<T>()
{
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    return <U extends T>(constructor: U) => { constructor; };
}

export default StaticImplements;