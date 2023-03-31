/**
 * @description Gets the constructor's name, due to the way JS works this is how you get the name of the class it extends from.
 * @param clazz - The class to check.
 * @returns {string} The name of the constructor (class)
 * @deprecated This does not work in Strict mode, please do not use this.
 */
const ExtendsWhat = <T extends new (...args: any[]) => any>(clazz: T): string => clazz.constructor.name;

export default ExtendsWhat;