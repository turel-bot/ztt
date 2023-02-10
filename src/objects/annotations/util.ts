const FirstUppercasedStr = (str: string, getter: boolean, isBool: boolean): string =>
{
    const name: string = str[0].toUpperCase() + str.slice(1);
    if(getter)
        return !isBool ? 'get' + name : 'is' + name;

    return 'set' + name;
};

export default FirstUppercasedStr;