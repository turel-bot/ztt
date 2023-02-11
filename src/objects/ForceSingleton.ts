import Objects from '.';

type Singleton<T extends new (...args: any[]) => any, C = InstanceType<T>> = C & {
    _instance: C;

    getInstance(): C;
    getInstance(...args: any[]): C;
};

/**
 * @warning UNIMPLEMENTED.
 * @description Turns a class into a singleton.
 * @param {new (...args: any[]) => any} clazz - Any class constructor. 
 * @returns {Singleton<T, C>} A new singleton-ified class (the instance of).
 * @throws
 */
const MakeSingleton = <T extends new (...args: any[]) => any, C = InstanceType<T>>(clazz: T): Singleton<T, C> =>
{
    Objects.NotNull(clazz, 'Class provided for turning into a Singleton cannot be null.');

    throw new Error('Unimplemented');
};

export default MakeSingleton;