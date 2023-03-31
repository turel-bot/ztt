/**
 * @description An annotation for function arguments which ensures that the argument is not null.
 * @returns {any}
 */
function NotNull(target: object, propertyKey: string | symbol, parameterIndex: number): any
{
    console.log(`target: ${ JSON.stringify(target) }`);
    console.log(`propertyKey: ${ String(propertyKey) }`);
    console.log(`parameterIndex: ${ parameterIndex }`);

    const descriptor: Record<string, unknown> = target[propertyKey as keyof typeof target];
    console.log((descriptor as any).call);

    const targetMethod: (...args: any[]) => any = descriptor.call as any;

    descriptor.call = (...args: any[]): any =>
    {
        for(let i: number = 0; i < args.length; i++)
        {
            if(i === parameterIndex)
                if(args[parameterIndex] === null)
                    throw new Error('Argument at index of {' + parameterIndex + '} was `null` when it was annotated by `NotNull`.');
        }

        return targetMethod(null, args);
    };

}

export default NotNull;