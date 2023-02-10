import Objects from '.';

type Singleton<T extends new (...args: any[]) => any, C = InstanceType<T>> = C & {
    _instance: C;

    getInstance(): C;
    getInstance(...args: any[]): C;
}

/**
 * @description Turns a class into a singleton.
 * @param {new (...args: any[]) => any} clazz - Any class constructor. 
 * @returns {Singleton<T, C>} A new singleton-ified class (the instance of).
 */
const MakeSingleton = <T extends new (...args: any[]) => any, C = InstanceType<T>>(clazz: T): Singleton<T, C> =>
{
    Objects.NotNull(clazz, 'Class provided for turning into a Singleton cannot be null.');

    return new class extends clazz
    {
        static _instance: C;

        static getInstance(): C;
        static getInstance(...args: any[]): C
        {
            return this._instance || (this._instance = new clazz(args));
        }
    };
};

export default MakeSingleton;