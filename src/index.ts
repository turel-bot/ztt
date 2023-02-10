/** -----------------------------------------------  */
/** \                   export                     \ */
/** \                   stuff                      \ */
/** |                   only                       | */
/** -----------------------------------------------  */
// (and sum data for using)

import Objects from './objects';
import makeGlobal from './unsafe/makeGlobal';

/** @description Are we running in Node? */
let isNode: boolean = true;

// @ts-expect-error We do not have the "dom" lib included in our TSConfig. 
// This is a valid check.
if(typeof window !== 'undefined' && typeof process !== 'object')
    isNode = false;

export
{
    isNode,
    Objects,
    makeGlobal
};


export default Objects;