import Objects from '.';

/**
 * @description A simple type that includes anything on the prototype that the class has, 
 * along side a variable and function to get the class instance.
 */
type Singleton<T extends new (...args: any[]) => C, C = InstanceType<T>> = T & {
    /**
     * @description The instance of the class.
     * @type {C} 
     */
    _instance: C;

    /**
     * @description Gets the class instance.
     * @returns {C} The instance of the class, or the newly created one.
     */
    getInstance(): C;
    /**
     * @description Gets the class instance, or creates a new one with the arguments provided.
     * @param {any[]} args - Any argument.
     * @returns {C} The instance of the class, or the newly created one.  
     */
    getInstance(...args: any[]): C;
};

/**
 * @description Turns a class into a singleton.
 * @param {new (...args: any[]) => any} clazz - Any class constructor. 
 * @returns {Singleton<T, C>} A new singleton-ified class (the instance of).
 * @throws If the argument is invalid.
 */
const Singleton = <T extends new (...args: any[]) => any, C = InstanceType<T>>(clazz: T): Singleton<T, C> =>
{
    Objects.NotNull(clazz, 'Class provided for turning into a Singleton cannot be null.');

    if((clazz as any as Record<string, unknown>)['_instance'] !== null && (clazz as any as Record<string, unknown>)['_instance'] !== undefined)
        throw new Error('_instance field already exists on Class prototype. Cannot make something that is already a singleton into a singleton.');

    Object.defineProperty(
        clazz,
        '_instance',
        {
            set: (clazz: C) =>
            {
                // @ts-expect-error this is valid
                clazz._instance = clazz;
            }
        }
    );

    Object.defineProperty(
        clazz,
        'getInstance',
        {
            value: (...args: any[]) =>
            {
                // @ts-expect-error this is valid
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                return (clazz._instance) || (clazz._instance = new clazz(...args));
            }
        }
    );

    return clazz as Singleton<T, C>;
};

export default Singleton;