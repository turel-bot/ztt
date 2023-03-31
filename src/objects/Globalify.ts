const Globalify = <K extends string | number | symbol, V>(key: K, value: V): void =>
{
    if(typeof global !== 'undefined')
        globalNode(key, value);

    if(typeof window !== 'undefined')
        globalDom(key, value);
};

const globalNode = <K extends string | number | symbol, V>(key: K, value: V): void =>
    // @ts-expect-error this is a valid statement, i dont care. this works.
    // typescript is being a little bitch so "key as keyof globalThis" wont work.
    global[key] = value;

const globalDom = <K extends string | number | symbol, V>(key: K, value: V): void =>
    // @ts-expect-error refer to the other comment    
    window[key] = value;

export default Globalify;
export { globalDom, globalNode };