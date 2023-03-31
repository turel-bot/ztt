/** -----------------------------------------------  */
/** \                   export                     \ */
/** \                   stuff                      \ */
/** |                   only                       | */
/** -----------------------------------------------  */
// (and sum data for using)
import 'reflect-metadata';

// #region globals
import Globalify from './objects/Globalify';
import objects from './objects';
import validate from './objects/validate';

Globalify('Objects', objects);
Globalify('Validate', validate);
// #endregion