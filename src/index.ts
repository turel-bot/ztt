/** -----------------------------------------------  */
/** \                   export                     \ */
/** \                   stuff                      \ */
/** |                   only                       | */
/** -----------------------------------------------  */
// (and sum data for using)

import makeGlobal from './unsafe/makeGlobal';

/** @description Are we running in Node? */
let isNode: boolean = true;

// This is a valid check.
if(typeof window !== 'undefined' && typeof process !== 'object')
    isNode = false;


// call makeGlobal initally.
makeGlobal();
export
{
    isNode
};