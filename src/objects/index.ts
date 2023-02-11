import Annotations from './annotations';
import ArrayToObject from './ArrayToObject';
import Callback from './Callback';
import Clone from './Clone';
import DoesExtend from './DoesExtend';
import Exists from './Exists';
import ExtendsWhat from './ExtendsWhat';
import Singleton from './ForceSingleton';
import IsEmpty from './IsEmpty';
import IsNull from './IsNull';
import NotNull from './NotNull';
import ObjectToArray from './ObjectToArray';

/**
 * @description A helper for anything regarding Objects.
 * @since 0.0.1
 * @beta
 */
const Objects = {
    ArrayToObject: ArrayToObject,
    ObjectToArray: ObjectToArray,
    IsEmpty: IsEmpty,
    IsNull: IsNull,
    Exists: Exists,
    Callback: Callback,
    Clone: Clone,
    DoesExtend: DoesExtend,
    ExtendsWhat: ExtendsWhat,
    NotNull: NotNull,
    NonNull: NotNull,
    Singleton: Singleton,

    annotations: Annotations
};

const ObjectsArray = ObjectToArray<typeof Objects>(Objects);

/** @private */
const keys = Object.keys(Objects);
/** @private */
const vals = Object.values(Objects);
for(let i: number = 0; i < keys.length; i++)
    // adds lowercased starting versions (camel instead of pascal) to the Objects.. object
    // EX: Clone & clone
    // @ts-expect-error This is valid.
    Objects[keys[i][0].toLowerCase() + keys[i].slice(1)] = vals[i];

export default Objects;
export { Objects, ObjectsArray };