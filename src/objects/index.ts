import Annotations from './annotations';
import ArrayToObject from './ArrayToObject';
import Callback from './Callback';
import Clone from './Clone';
import DoesExtend from './DoesExtend';
import Exists from './Exists';
import ExtendsWhat from './ExtendsWhat';
import Singleton from './Singleton';
import IsEmpty from './IsEmpty';
import IsNull from './IsNull';
import NotNull from './NotNull';
import ObjectToArray from './ObjectToArray';
import Pipe, { Piped } from './Pipe';

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
    Pipe: Pipe,
    Piped: Piped,
    PipeLine: Pipe,

    annotations: Annotations
};

const ObjectsArray = ObjectToArray<typeof Objects>(Objects);

/** @private */
const keys: keyof typeof Objects = Object.keys(Objects) as unknown as keyof typeof Objects;
/** @private */
const vals = Object.values(Objects);
for(let i: number = 0; i < keys.length; i++)
    // Aaa -> aaa
    // thats it.
    keys[i][0].toLowerCase() === keys[i][0]
        // @ts-expect-error  This is valid.
        ? Objects[keys[i][0].toUpperCase() + keys[i].slice(1)] = vals[i]
        // @ts-expect-error  This is valid.
        : Objects[keys[i][0].toLowerCase() + keys[i].slice(1)] = vals[i];

export default Objects;
export { Objects, ObjectsArray };