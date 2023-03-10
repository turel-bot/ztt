import obj from '../objects';
import validate from '../objects/validate';

/** @private @description Makes the Objects variable globally available. */
const makeGlobal = (): void =>
{
    // if global is defined, then we are most likely running in node
    // so set it up for node
    if(typeof global !== 'undefined')
        makeGlobalNode();

    // window means we're runnig in the web, so set it up for the web/DOM
    if(typeof window !== 'undefined')
        makeGlobalDom();
};

/** @private @description Makes Objects & Validate globally accessable for the Node runtime. */
const makeGlobalNode = (): void =>
{
    global.Objects = obj;
    global.Validate = validate;
};

/** @private @description Makes Objects & Validate globally accessable for the Web. */
const makeGlobalDom = (): void =>
{
    window.Objects = obj;
    window.Validate = validate;
};

export default makeGlobal;