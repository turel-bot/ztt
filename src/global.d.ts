/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-var */
import type objectsObj from './objects';
import type validateObj from './objects/validate';

declare global
{
    var Objects: typeof objectsObj;
    var Validate: typeof validateObj;
}

export {  };